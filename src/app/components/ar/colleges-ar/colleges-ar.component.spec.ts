import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesArComponent } from './colleges-ar.component';

describe('CollegesArComponent', () => {
  let component: CollegesArComponent;
  let fixture: ComponentFixture<CollegesArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
