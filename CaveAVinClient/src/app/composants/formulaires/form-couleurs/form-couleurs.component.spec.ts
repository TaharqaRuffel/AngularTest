import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCouleursComponent } from './form-couleurs.component';

describe('FormCouleursComponent', () => {
  let component: FormCouleursComponent;
  let fixture: ComponentFixture<FormCouleursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCouleursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCouleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
