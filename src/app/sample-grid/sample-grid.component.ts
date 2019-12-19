import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import sampleData from '../../assets/SAMPLE_DATA.json';
import { SAMPLE_GRID_COLUMNS } from './sample-grid-columns.constant';
import { IGenericGridConfig } from '../grids/generic-grid/generic-grid-config.interface';
import { environment } from '../../environments/environment';
import { SAMPLE_GRID_SUMMARIES } from './sample-grid-summaries.constant';
import { SummaryItem, IContextMenuConfiguration } from '../grids/models/models';

@Component({
  selector: 'sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.scss']
})
export class SampleGridComponent implements OnInit, AfterViewInit {
  public gridColumns: any[] = [];

  @ViewChild('workflow', { static: false })
  public workflowTemplate?: TemplateRef<ElementRef>;

  public templates: any = {};

  public data = sampleData;
  public initialized = false;
  public gridConfig: IGenericGridConfig = environment.genericGridDefaultSetting;
  public gridSummaries: SummaryItem[] = [];

  public singleOptions: IContextMenuConfiguration[] = [
    {
      label: 'option',
      onItemClick: data => console.log('single', data)
    }
  ];

  public multipleOptions: IContextMenuConfiguration[] = [
    {
      label: 'option',
      onItemClick: data => console.log('multiple', data)
    }
  ];

  public headerRowOptions: IContextMenuConfiguration[] = [
    {
      label: 'clear',
      icon: '<b>Clear<b>',
      beginGroup: true,
      onItemClick: data => {},
      items: [
        {
          label: 'Filter',
          icon: '<b>F<b>',
          beginGroup: true,
          onItemClick: data => {
            console.log(data);
          }
        },
        {
          label: 'Search',
          icon: '<b>S<b>',
          beginGroup: true,
          onItemClick: data => {}
        }
      ]
    }
  ];

  constructor() {}

  public ngOnInit() {
    this.gridColumns = SAMPLE_GRID_COLUMNS;
    this.gridSummaries = SAMPLE_GRID_SUMMARIES;
    this.initialized = true;
  }

  public ngAfterViewInit() {
    this.templates.Status = this.workflowTemplate;
  }

  public newConfig(newConfig: IGenericGridConfig) {
    if (newConfig != null) {
      this.gridConfig = newConfig;
    }
  }
}
