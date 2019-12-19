import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsModule } from './grids/grids.module';
import { GenericGridComponent } from './grids/generic-grid/generic-grid.component';
import { DxDataGridModule } from 'devextreme-angular';
import { SettingAdministratorComponent } from './common/setting-administrator/setting-administrator.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { SampleGridComponent } from './sample-grid/sample-grid.component';

@NgModule({
  declarations: [AppComponent, SampleGridComponent, SettingAdministratorComponent],
  imports: [GridsModule, BrowserModule, AppRoutingModule, DxDataGridModule, NgJsonEditorModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SampleGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
