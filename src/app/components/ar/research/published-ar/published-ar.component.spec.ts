import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedArComponent } from './published-ar.component';

describe('PublishedArComponent', () => {
  let component: PublishedArComponent;
  let fixture: ComponentFixture<PublishedArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
