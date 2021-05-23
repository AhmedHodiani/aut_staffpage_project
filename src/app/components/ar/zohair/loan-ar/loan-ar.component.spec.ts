import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanArComponent } from './loan-ar.component';

describe('LoanArComponent', () => {
  let component: LoanArComponent;
  let fixture: ComponentFixture<LoanArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
