import { TestBed } from '@angular/core/testing';

import { ApplicationsService } from './applicant-applications.service';

describe('ApplicantApplicationsService', () => {
  let service: ApplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
