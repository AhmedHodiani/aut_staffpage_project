import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArComponent } from './footer-ar.component';

describe('FooterArComponent', () => {
  let component: FooterArComponent;
  let fixture: ComponentFixture<FooterArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
