export const environment = {
  production: true,
  genericGridDefaultSetting: {
    grouping: {
      allowGrouping: true,
      groupingPanel: true
    },
    rowFilter: {
      visible: true
    },
    headerFilter: {
      visible: true
    },
    searchPanel: {
      visible: true,
      placeHolder: 'search ..',
      width: 240
    },
    columnChooser: {
      enabled: true,
      mode: 'select'
    },
    pagination: {
      mode: 'virtual',
      pageSize: 50,
      useNative: true,
      pagingEnabled: false,
      showPageSizeSelector: false,
      allowedPageSizes: [25, 50, 100, 200, 400, 600],
      showNavigationButtons: false
    },
    showBorders: true,
    columnAutoWidth: false,
    allowColumnResizing: true,
    columnMinWidth: 100,
    twoWayBindingEnabled: false,
    selection: {
      mode: 'none'
    },
    loadPanel: {
      enabled: true
    }
  }
};
