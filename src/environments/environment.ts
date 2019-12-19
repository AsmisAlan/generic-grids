// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
      pageSize: 25,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
