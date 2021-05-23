import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEnComponent } from './published-en.component';

describe('PublishedEnComponent', () => {
  let component: PublishedEnComponent;
  let fixture: ComponentFixture<PublishedEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
