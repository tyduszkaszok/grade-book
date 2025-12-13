import { TestBed } from '@angular/core/testing';

import { MockTimetable } from './mock-timetable';

describe('MockTimetable', () => {
  let service: MockTimetable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTimetable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
