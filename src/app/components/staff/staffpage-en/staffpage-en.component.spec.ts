import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpageEnComponent } from './staffpage-en.component';

describe('StaffpageEnComponent', () => {
  let component: StaffpageEnComponent;
  let fixture: ComponentFixture<StaffpageEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffpageEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffpageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
