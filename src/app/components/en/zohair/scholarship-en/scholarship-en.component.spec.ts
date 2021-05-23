import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipEnComponent } from './scholarship-en.component';

describe('ScholarshipEnComponent', () => {
  let component: ScholarshipEnComponent;
  let fixture: ComponentFixture<ScholarshipEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
