import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfoviewComponent } from './loginfoview.component';

describe('LoginfoviewComponent', () => {
  let component: LoginfoviewComponent;
  let fixture: ComponentFixture<LoginfoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfoviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
