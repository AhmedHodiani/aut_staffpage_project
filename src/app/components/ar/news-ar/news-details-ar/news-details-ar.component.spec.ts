import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsArComponent } from './news-details-ar.component';

describe('NewsDetailsArComponent', () => {
  let component: NewsDetailsArComponent;
  let fixture: ComponentFixture<NewsDetailsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
