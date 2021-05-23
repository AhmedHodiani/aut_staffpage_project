import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpageArComponent } from './staffpage-ar.component';

describe('StaffpageArComponent', () => {
  let component: StaffpageArComponent;
  let fixture: ComponentFixture<StaffpageArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffpageArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffpageArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
