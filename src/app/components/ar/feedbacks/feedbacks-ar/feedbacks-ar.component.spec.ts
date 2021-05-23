import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksArComponent } from './feedbacks-ar.component';

describe('FeedbacksArComponent', () => {
  let component: FeedbacksArComponent;
  let fixture: ComponentFixture<FeedbacksArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
