import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEnComponent } from './apply-en.component';

describe('ApplyEnComponent', () => {
  let component: ApplyEnComponent;
  let fixture: ComponentFixture<ApplyEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
