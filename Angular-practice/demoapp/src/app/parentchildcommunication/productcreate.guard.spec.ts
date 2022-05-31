import { TestBed } from '@angular/core/testing';

import { ProductcreateGuard } from './productcreate.guard';

describe('ProductcreateGuard', () => {
  let guard: ProductcreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductcreateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
