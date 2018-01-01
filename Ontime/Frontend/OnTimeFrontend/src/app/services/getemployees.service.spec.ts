import { TestBed, inject } from '@angular/core/testing';

import { GetemployeesService } from './getemployees.service';

describe('GetemployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetemployeesService]
    });
  });

  it('should be created', inject([GetemployeesService], (service: GetemployeesService) => {
    expect(service).toBeTruthy();
  }));
});
