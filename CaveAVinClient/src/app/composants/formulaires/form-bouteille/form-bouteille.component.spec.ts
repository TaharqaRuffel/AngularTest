import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBouteilleComponent } from './form-bouteille.component';

describe('FormBouteilleComponent', () => {
  let component: FormBouteilleComponent;
  let fixture: ComponentFixture<FormBouteilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBouteilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBouteilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
