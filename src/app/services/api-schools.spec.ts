import { TestBed } from '@angular/core/testing';

import { ApiSchools } from './api-schools';

describe('ApiSchools', () => {
  let service: ApiSchools;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSchools);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
