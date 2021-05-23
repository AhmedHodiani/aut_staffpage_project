import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsEnComponent } from './requirements-en.component';

describe('RequirementsEnComponent', () => {
  let component: RequirementsEnComponent;
  let fixture: ComponentFixture<RequirementsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
