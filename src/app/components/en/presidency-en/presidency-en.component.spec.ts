import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidencyEnComponent } from './presidency-en.component';

describe('PresidencyEnComponent', () => {
  let component: PresidencyEnComponent;
  let fixture: ComponentFixture<PresidencyEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidencyEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidencyEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
