import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteillesComponent } from './bouteilles.component';

describe('BouteillesComponent', () => {
  let component: BouteillesComponent;
  let fixture: ComponentFixture<BouteillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouteillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
