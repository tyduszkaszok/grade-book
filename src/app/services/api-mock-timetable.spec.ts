import { TestBed } from '@angular/core/testing';

import { ApiMockTimetable } from './api-mock';

describe('ApiMockTimetable', () => {
  let service: ApiMockTimetable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMockTimetable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
