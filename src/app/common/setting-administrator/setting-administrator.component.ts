// tslint:disable:component-selector
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { EventEmitter } from 'events';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'setting-administrator',
  templateUrl: './setting-administrator.component.html',
  styleUrls: ['./setting-administrator.component.scss']
})
export class SettingAdministratorComponent {
  public options = new JsonEditorOptions();
  @Input()
  public data: any = {};

  // tslint:disable-next-line:no-output-rename
  @Output('onChange')
  public dataEmitter: BehaviorSubject<any> = new BehaviorSubject(null);

  @ViewChild('editor', { static: true }) public editor?: JsonEditorComponent;

  changeData() {
    if (this.editor != null) {
      this.data = this.editor.get();
      this.dataEmitter.next(this.data);
    }
  }
}
