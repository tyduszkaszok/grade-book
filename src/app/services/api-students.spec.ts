import { TestBed } from '@angular/core/testing';

import { ApiStudents } from './api-students';

describe('ApiStudents', () => {
  let service: ApiStudents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
