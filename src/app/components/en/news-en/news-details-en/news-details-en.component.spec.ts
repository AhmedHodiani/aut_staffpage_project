import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsEnComponent } from './news-details-en.component';

describe('NewsDetailsEnComponent', () => {
  let component: NewsDetailsEnComponent;
  let fixture: ComponentFixture<NewsDetailsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
