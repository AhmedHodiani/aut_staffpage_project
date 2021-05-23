import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArComponent } from './form-ar.component';

describe('FormArComponent', () => {
  let component: FormArComponent;
  let fixture: ComponentFixture<FormArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
