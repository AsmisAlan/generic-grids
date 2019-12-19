import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAdministratorComponent } from './setting-administrator.component';

describe('SettingAdministratorComponent', () => {
  let component: SettingAdministratorComponent;
  let fixture: ComponentFixture<SettingAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
