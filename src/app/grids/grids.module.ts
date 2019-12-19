import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxDataGridModule, DxBulletModule, DxContextMenuModule } from 'devextreme-angular';

import { GenericGridComponent } from './generic-grid/generic-grid.component';

@NgModule({
  declarations: [GenericGridComponent],
  exports: [GenericGridComponent],
  imports: [CommonModule, DxDataGridModule, DxBulletModule, DxContextMenuModule],
  entryComponents: [GenericGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridsModule {}
