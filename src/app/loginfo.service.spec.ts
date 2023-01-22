import { TestBed } from '@angular/core/testing';
import { LogInfoService } from './loginfo.service';

describe('LoginfoService', () => {
  let service: LogInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
