import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnComponent } from './students-en.component';

describe('StudentsEnComponent', () => {
  let component: StudentsEnComponent;
  let fixture: ComponentFixture<StudentsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
