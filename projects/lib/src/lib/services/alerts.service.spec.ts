import { TestBed } from '@angular/core/testing';

import { AlertSystemService } from './alerts.service';

describe('AlertsService', () => {
  let service: AlertSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
