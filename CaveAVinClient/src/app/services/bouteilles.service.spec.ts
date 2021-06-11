import { TestBed } from '@angular/core/testing';

import { BouteillesService } from './bouteilles.service';

describe('BouteillesService', () => {
  let service: BouteillesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouteillesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
