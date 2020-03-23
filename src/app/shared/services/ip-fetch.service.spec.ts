import { TestBed } from '@angular/core/testing';

import { IpFetchService } from './ip-fetch.service';

describe('IpFetchService', () => {
  let service: IpFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
