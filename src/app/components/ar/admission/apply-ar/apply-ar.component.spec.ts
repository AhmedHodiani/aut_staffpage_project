import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyArComponent } from './apply-ar.component';

describe('ApplyArComponent', () => {
  let component: ApplyArComponent;
  let fixture: ComponentFixture<ApplyArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
