import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnComponent } from './form-en.component';

describe('FormEnComponent', () => {
  let component: FormEnComponent;
  let fixture: ComponentFixture<FormEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
