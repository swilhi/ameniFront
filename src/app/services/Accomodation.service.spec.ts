import { Accomodation } from './../models/accomodation';
import { TestBed } from '@angular/core/testing';

import { AccomodationService } from './Accomodation.service';

describe('AccomodationService', () => {
  let service: AccomodationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomodationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
