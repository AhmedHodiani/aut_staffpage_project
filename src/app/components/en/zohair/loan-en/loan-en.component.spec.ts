import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEnComponent } from './loan-en.component';

describe('LoanEnComponent', () => {
  let component: LoanEnComponent;
  let fixture: ComponentFixture<LoanEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
