import { TestBed } from '@angular/core/testing';

import { AccessAuthorizationGuard } from './access-authorization.guard';

describe('AccessAuthorizationGuard', () => {
  let guard: AccessAuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessAuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
