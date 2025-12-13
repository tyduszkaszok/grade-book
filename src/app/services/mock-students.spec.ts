import { TestBed } from '@angular/core/testing';

import { MockStudents } from './mock-students';

describe('MockStudents', () => {
  let service: MockStudents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockStudents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
