import { TestBed } from '@angular/core/testing';

import { ReporttextService } from './reporttext.service';

describe('ReporttextService', () => {
  let service: ReporttextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporttextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
