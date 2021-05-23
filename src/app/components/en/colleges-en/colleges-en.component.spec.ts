import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesEnComponent } from './colleges-en.component';

describe('CollegesEnComponent', () => {
  let component: CollegesEnComponent;
  let fixture: ComponentFixture<CollegesEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
