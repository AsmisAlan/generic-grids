import 'zone.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'node_modules/devextreme/dist/css/dx.common.css';
import 'node_modules/devextreme/dist/css/dx.light.css';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(bootstraped => {})
  .catch(err => console.error(err));

// defineElement();
