import { TestBed } from '@angular/core/testing';

import { TopserviceService } from './topservice.service';

describe('TopserviceService', () => {
  let service: TopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
