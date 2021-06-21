import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegionEditComponent } from './form-region-edit.component';

describe('FormRegionEditComponent', () => {
  let component: FormRegionEditComponent;
  let fixture: ComponentFixture<FormRegionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
