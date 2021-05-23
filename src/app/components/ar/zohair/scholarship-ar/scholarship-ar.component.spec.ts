import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipArComponent } from './scholarship-ar.component';

describe('ScholarshipArComponent', () => {
  let component: ScholarshipArComponent;
  let fixture: ComponentFixture<ScholarshipArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
