type dxFormat = import('devextreme').default.ui.format;

export interface ISummaryBase {
  name?: string;
  column?: string;
  showInColumn?: string;
  summaryType?: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum' | string;
  valueFormat?: dxFormat;
  displayFormat?: string;
  customizeText?: (itemInfo: { value?: string | number | Date; valueText?: string }) => string;
  skipEmptyValues?: boolean;
  enabled?: boolean;
  calculateOn: TargetSummaryType;
}

export enum TargetSummaryType {
  groups = 0,
  total = 1,
  groupsAndTotal = 0
}

export interface ISummaryTotal extends ISummaryBase {
  alignment?: 'center' | 'left' | 'right';
  cssClass?: string;
}

export interface ISummaryGroup extends ISummaryBase {
  showInGroupFooter?: boolean;
  alignByColumn?: boolean;
  showInColumn?: string;
}

export type SummaryItem = ISummaryTotal & ISummaryGroup;

// COLUMNS

export type DataGridColumn = import('devextreme').default.ui.dxDataGridColumn;

// CONTEXT MENU

export interface IContextMenuConfiguration {
  icon?: string;
  label?: string;
  class?: string;
  items?: IContextMenuConfiguration[];
  permission?: string | string[] | null; // GridPermissions
  disabled?: boolean;
  beginGroup?: boolean;
  visible?: boolean;
  showOnlyOn?: 'toolbarMenu' | 'contextMenu';
  renderIf?: (outData: any) => boolean;
  onItemClick: (arg: any) => any;
  loadItems?: (arg: any) => IContextMenuConfiguration[];
}

export interface IContextMenuItem {
  // Context menu native item attributes
  html?: string;
  icon?: string;
  text?: string;
  onItemClick: () => any;
  beginGroup?: boolean;
  disabled?: boolean;
  visible?: boolean;
  // Custom implementation
  label?: string;
  customIcon?: string;
  title?: string;
  items?: IContextMenuItem[];
  class?: string;
  showOnlyOn?: 'toolbarMenu' | 'contextMenu';
}
