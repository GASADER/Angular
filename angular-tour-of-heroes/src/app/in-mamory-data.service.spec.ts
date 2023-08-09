import { TestBed } from '@angular/core/testing';

import { InMamoryDataService } from './in-mamory-data.service';

describe('InMamoryDataService', () => {
  let service: InMamoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMamoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
