import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainArComponent } from './sustain-ar.component';

describe('SustainArComponent', () => {
  let component: SustainArComponent;
  let fixture: ComponentFixture<SustainArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
