import { TestBed } from '@angular/core/testing';

import { GetSocialDataService } from './get-social-data.service';

describe('GetSocialDataService', () => {
  let service: GetSocialDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSocialDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
