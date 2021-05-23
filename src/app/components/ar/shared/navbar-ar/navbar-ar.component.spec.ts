import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarArComponent } from './navbar-ar.component';

describe('NavbarArComponent', () => {
  let component: NavbarArComponent;
  let fixture: ComponentFixture<NavbarArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
