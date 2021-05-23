import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsArComponent } from './students-ar.component';

describe('StudentsArComponent', () => {
  let component: StudentsArComponent;
  let fixture: ComponentFixture<StudentsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
