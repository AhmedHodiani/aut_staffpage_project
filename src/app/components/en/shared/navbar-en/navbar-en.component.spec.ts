import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnComponent } from './navbar-en.component';

describe('NavbarEnComponent', () => {
  let component: NavbarEnComponent;
  let fixture: ComponentFixture<NavbarEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
