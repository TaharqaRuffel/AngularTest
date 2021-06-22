import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCouleurEditComponent } from './form-couleur-edit.component';

describe('FormCouleurEditComponent', () => {
  let component: FormCouleurEditComponent;
  let fixture: ComponentFixture<FormCouleurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCouleurEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCouleurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
