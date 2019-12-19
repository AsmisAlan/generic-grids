export interface IGenericGridConfig {
  pagination: IGenericGridPagination;
  columnChooser: IGenericGridColumnChooser;
  rowFilter: IGenericGridFilter;
  headerFilter: IGenericGridFilter;
  searchPanel: IGenericGridRowPanel;
  grouping: IGenericGridGrouping;
  loadPanel: IGenericGridLoadPanel;
  selection: IGenericGridSelection;
  showBorders: boolean;
  columnAutoWidth: boolean;
  columnMinWidth: number;
  allowColumnResizing: boolean;
  twoWayBindingEnabled: boolean;
}

export interface IGenericGridPagination {
  mode: string;
  useNative: boolean;
  pagingEnabled: boolean;
  pageSize: number;
  showPageSizeSelector: boolean;
  allowedPageSizes: number[];
  showNavigationButtons: boolean;
}

export interface IGenericGridColumnChooser {
  enabled: boolean;
  mode: 'dragAndDrop' | 'select' | string;
}

export interface IGenericGridSelection {
  mode: 'multiple' | 'none' | 'single' | string;
}

export interface IGenericGridLoadPanel {
  enabled: boolean;
  height?: number;
  width?: number;
  imageSrc?: string;
  message?: string;
}

export interface IGenericGridFilter {
  visible: boolean;
}

export interface IGenericGridRowPanel extends IGenericGridFilter {
  width: number;
  placeHolder: string;
}

export interface IGenericGridGrouping {
  allowGrouping: boolean;
  groupingPanel: boolean;
}

export interface IGenericGridFilter {
  visible: boolean;
}

export interface IGenericGridRowPanel extends IGenericGridFilter {
  width: number;
  placeHolder: string;
}

export interface IGenericGridGrouping {
  allowGrouping: boolean;
  groupingPanel: boolean;
}
