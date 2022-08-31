import { TestBed } from '@angular/core/testing';

import { JLsShopFormService } from './jls-shop-form.service';

describe('JLsShopFormService', () => {
  let service: JLsShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JLsShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
