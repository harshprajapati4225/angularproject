import { TestBed } from '@angular/core/testing';

import { AccessAuthorizationService } from './access-authorization.service';

describe('AccessAuthorizationService', () => {
  let service: AccessAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
