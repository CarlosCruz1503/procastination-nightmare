import { TestBed } from '@angular/core/testing';

import { TasktableService } from './tasktable.service';

describe('TasktableService', () => {
  let service: TasktableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasktableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
