import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArComponent } from './about-ar.component';

describe('AboutArComponent', () => {
  let component: AboutArComponent;
  let fixture: ComponentFixture<AboutArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
