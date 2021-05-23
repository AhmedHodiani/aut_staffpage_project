import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanArComponent } from './dean-ar.component';

describe('DeanArComponent', () => {
  let component: DeanArComponent;
  let fixture: ComponentFixture<DeanArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
