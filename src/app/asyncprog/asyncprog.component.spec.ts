import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncprogComponent } from './asyncprog.component';

describe('AsyncprogComponent', () => {
  let component: AsyncprogComponent;
  let fixture: ComponentFixture<AsyncprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
