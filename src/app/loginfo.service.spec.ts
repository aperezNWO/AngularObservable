import { TestBed } from '@angular/core/testing';

import { LoginfoService } from './loginfo.service';

describe('LoginfoService', () => {
  let service: LoginfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
