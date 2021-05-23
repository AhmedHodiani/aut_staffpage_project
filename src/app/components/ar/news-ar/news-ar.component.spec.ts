import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArComponent } from './news-ar.component';

describe('NewsArComponent', () => {
  let component: NewsArComponent;
  let fixture: ComponentFixture<NewsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
