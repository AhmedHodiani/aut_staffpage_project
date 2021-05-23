import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsArComponent } from './requirements-ar.component';

describe('RequirementsArComponent', () => {
  let component: RequirementsArComponent;
  let fixture: ComponentFixture<RequirementsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
