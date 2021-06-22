import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBouteilleEditComponent } from './form-bouteille-edit.component';

describe('FormBouteilleEditComponent', () => {
  let component: FormBouteilleEditComponent;
  let fixture: ComponentFixture<FormBouteilleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBouteilleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBouteilleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
