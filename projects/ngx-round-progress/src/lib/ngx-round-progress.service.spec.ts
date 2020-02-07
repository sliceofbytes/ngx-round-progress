import { TestBed } from '@angular/core/testing';

import { RoundProgressService } from './ngx-round-progress.service';

describe('RoundProgressService', () => {
  let service: RoundProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoundProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

