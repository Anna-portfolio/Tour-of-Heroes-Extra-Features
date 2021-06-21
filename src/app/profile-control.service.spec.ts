import { TestBed } from '@angular/core/testing';

import { ProfileControlService } from './profile-control.service';

describe('ProfileControlService', () => {
  let service: ProfileControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
