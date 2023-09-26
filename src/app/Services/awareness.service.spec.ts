import { TestBed } from '@angular/core/testing';

import { AwarenessService } from './awareness.service';

describe('AwarenessService', () => {
  let service: AwarenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwarenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
