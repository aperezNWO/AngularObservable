import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInfoViewComponent } from './loginfoview.component';

describe('LoginfoviewComponent', () => {
  let component: LogInfoViewComponent;
  let fixture: ComponentFixture<LogInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
