import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

import { DxDataGridComponent } from 'devextreme-angular';

import { DataColumn } from '../data-column.model';
import { IGenericGridConfig } from './generic-grid-config.interface';
import { environment } from '../../../environments/environment';
import {
  DataGridColumn,
  SummaryItem,
  TargetSummaryType,
  IContextMenuConfiguration,
  IContextMenuItem
} from '../models/models';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent<TData> implements OnInit {
  // Data
  private _items: TData[] = [];
  private _dataSource!: DataSource;

  // Settings
  private _settings: IGenericGridConfig = environment.genericGridDefaultSetting;

  // Grid layout.
  private _dataGridColumns: DataGridColumn[] = [];
  private _dataGridTotalSummaries: SummaryItem[] = [];
  private _dataGridGroupSummaries: SummaryItem[] = [];

  // elements
  private _nativeElement: HTMLElement;

  // DOM
  @ViewChild('genericGrid', { static: true })
  public dataGrid!: DxDataGridComponent;

  // Bindings
  @Input()
  public keyExpr!: keyof TData;

  @Input()
  public currentFilter = '';

  @Input()
  public headerRowOptions: IContextMenuConfiguration[] = [];

  @Input()
  public singleSelectionOptions: IContextMenuConfiguration[] = [];

  @Input()
  public multipleSelectionOptions: IContextMenuConfiguration[] = [];

  @Input()
  public set summaries(summaries: SummaryItem[]) {
    summaries.forEach(x => {
      if (x.calculateOn === TargetSummaryType.groupsAndTotal) {
        this._dataGridTotalSummaries.push(x);
        this._dataGridGroupSummaries.push(x);
      } else if (x.calculateOn === TargetSummaryType.total) {
        this._dataGridTotalSummaries.push(x);
      } else if (x.calculateOn === TargetSummaryType.groups) {
        this._dataGridGroupSummaries.push(x);
      }
    });
  }

  @Input()
  public set settings(settings: IGenericGridConfig) {
    this._settings = settings;
    this._refreshDataGrid();
  }

  public get settings() {
    return this._settings;
  }

  @Input()
  public set columns(columns: DataColumn<TData>[]) {
    this._updateDataGridColumns(columns);
  }

  @Input()
  public customTemplates?: ElementRef;

  @Input()
  public set items(value: TData[]) {
    this._items = value;
    this._refreshDataSource(this._items);
  }

  public get items() {
    return [...this._items];
  }

  @Output()
  public rowClicked = new EventEmitter<TData>();

  public get dataSource() {
    return this._dataSource;
  }

  // Grid layout
  public get dataGridColumns() {
    return this._dataGridColumns;
  }

  public get dataGridTotalSummaries() {
    return this._dataGridTotalSummaries;
  }

  public get dataGridGroupSummaries() {
    return this._dataGridGroupSummaries;
  }

  constructor(private element: ElementRef) {
    this._nativeElement = element.nativeElement;
  }

  async ngOnInit() {
    await this._refreshDataSource(this._items);

    setTimeout(() => {
      this._emit('element-ready', this);
    });
  }

  public onRowClicked(dataRow: { data: TData }) {
    this.rowClicked.emit(dataRow.data);
    this._emit('row-clicked', dataRow.data);
  }

  private async _refreshDataSource(items: TData[]) {
    const store = new ArrayStore({
      key: this.keyExpr as string,
      data: items
    });

    this._dataSource = new DataSource({
      store
    });

    await this._refreshDataGrid();
  }

  private async _updateDataGridColumns(columns: DataColumn<TData>[]) {
    const dataGridColumns = columns.map(x => {
      return x as DataGridColumn;
    });

    this._dataGridColumns = dataGridColumns;

    await this._refreshDataGrid();
  }

  private async _refreshDataGrid() {
    return new Promise(resolve => {
      if (this.dataGrid && this.dataGrid.instance) {
        resolve(this.dataGrid.instance.refresh());
      }
      resolve();
    });
  }

  private _emit<TPayload>(name: string, payload: TPayload) {
    const event = new CustomEvent(name, { detail: payload });
    this._nativeElement.dispatchEvent(event);
    return event;
  }

  // Context menu
  public addMenuItems(e: any) {
    if (!e.items) {
      e.items = [];
    }
    if (e.target === 'header') {
      // Add a custom menu item
      e.items = e.items.concat(this.buildHeaderMenu(this.headerRowOptions, { column: e.column }));
    } else if (e.target === 'content') {
      let selection = this.getSelection(e.rowIndex);

      const items = this.buildMenu(
        this.singleSelectionOptions,
        this.multipleSelectionOptions,
        selection
      );

      e.items = items;
    }
  }

  private getSelection(rowIndex: number) {
    // In order to control the selections the method get the selected rows and
    // compare this with the rowIndex where the guest instanced the context menu

    const getIndexByKey = this.dataGrid.instance.getRowIndexByKey;
    const selectedIndexes = this.dataGrid.instance
      .getSelectedRowKeys()
      .map((key: string) => getIndexByKey(key));

    if (selectedIndexes.indexOf(rowIndex) === -1) {
      this.dataGrid.instance.selectRowsByIndexes([rowIndex]);
    }
    return this.dataGrid.instance.getSelectedRowsData();
  }

  private buildMenu(
    simpleSelectionConfig: IContextMenuConfiguration[],
    multipleSelectionConfig: IContextMenuConfiguration[],
    selection: any[],
    toolbar: boolean = false
  ) {
    const result: IContextMenuItem[] = [];
    const addItem = (config: IContextMenuConfiguration, data: TData[] | TData) => {
      const item = this.contextMenuItemConstructor(config, data, toolbar);
      if (item) {
        result.push(item);
      }
    };

    const filterForMenu = (configs: IContextMenuConfiguration[]) => {
      return configs.filter(
        x =>
          !x.showOnlyOn ||
          (toolbar ? x.showOnlyOn === 'toolbarMenu' : x.showOnlyOn === 'contextMenu')
      );
    };
    if (selection.length > 1) {
      // Multiple selection
      const multipleSelection = filterForMenu(multipleSelectionConfig);
      for (const itemConfig of multipleSelection) {
        addItem(itemConfig, selection);
      }
    } else {
      // Single selection
      const simpleSelection = filterForMenu(simpleSelectionConfig);
      const entity = selection[0];
      for (const itemConfig of simpleSelection) {
        addItem(itemConfig, entity);
      }
    }

    return result;
  }

  private buildHeaderMenu(contextMenuItems: IContextMenuConfiguration[], data: any) {
    const result: IContextMenuItem[] = [];
    const addItem = (config: IContextMenuConfiguration, data: any) => {
      const item = this.contextMenuItemConstructor(config, data, false);
      if (item) {
        result.push(item);
      }
    };

    const filterForMenu = (configs: IContextMenuConfiguration[]) => {
      return configs.filter(
        x =>
          !x.showOnlyOn ||
          (toolbar ? x.showOnlyOn === 'toolbarMenu' : x.showOnlyOn === 'contextMenu')
      );
    };
    // Multiple selection
    const menuItem = filterForMenu(contextMenuItems);
    for (const itemConfig of menuItem) {
      addItem(itemConfig, data);
    }

    return result;
  }

  private contextMenuItemConstructor(
    item: IContextMenuConfiguration,
    outData: any,
    toolbar: boolean = false
  ): IContextMenuItem | null {
    let contextMenu: IContextMenuItem = {} as IContextMenuItem;
    if (!item.renderIf || item.renderIf(outData)) {
      const subItemsList: IContextMenuItem[] = [];

      for (const subItem of item.items || []) {
        const subContextMenuItem = this.contextMenuItemConstructor(subItem, outData, toolbar);
        if (subContextMenuItem) {
          subItemsList.push(subContextMenuItem);
        }
      }

      if (item.loadItems) {
        const subItems = item.loadItems(outData);
        for (const subItem of subItems) {
          const subContextMenuItem = this.contextMenuItemConstructor(subItem, outData, toolbar);
          if (subContextMenuItem) {
            subItemsList.push(subContextMenuItem);
          }
        }
      }

      contextMenu = {
        html: item.icon ? item.icon : '',
        text: `${item.label}`,
        onItemClick: () => item.onItemClick(outData),
        items: subItemsList,
        class: item.class,
        title: item.label,
        beginGroup: item.beginGroup,
        disabled: item.disabled,
        visible: item.visible !== null && item.visible !== undefined ? item.visible : true,
        showOnlyOn: item.showOnlyOn
      };
    } else {
      contextMenu = {
        html: item.icon ? item.icon : '',
        text: `${item.label}`,
        onItemClick: () => {},
        title: item.label,
        beginGroup: item.beginGroup,
        visible: false,
        showOnlyOn: item.showOnlyOn
      };
    }

    if (toolbar) {
      contextMenu.customIcon = item.icon ? item.icon : '';
    }
    return contextMenu;
  }
}
