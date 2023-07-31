import { TestBed } from '@angular/core/testing';

import { MetaInformationService } from './meta-information.service';

describe('MetaInformationService', () => {
  let service: MetaInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
