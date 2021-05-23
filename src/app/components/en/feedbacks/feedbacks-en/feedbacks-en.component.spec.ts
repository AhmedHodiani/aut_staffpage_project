import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksEnComponent } from './feedbacks-en.component';

describe('FeedbacksEnComponent', () => {
  let component: FeedbacksEnComponent;
  let fixture: ComponentFixture<FeedbacksEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
