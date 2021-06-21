import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultiRegionComponent } from './form-multi-region.component';

describe('FormMultiRegionComponent', () => {
  let component: FormMultiRegionComponent;
  let fixture: ComponentFixture<FormMultiRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMultiRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultiRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
