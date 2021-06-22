import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCouleurComponent } from './form-couleur.component';

describe('FormCouleursComponent', () => {
  let component: FormCouleurComponent;
  let fixture: ComponentFixture<FormCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
