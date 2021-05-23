import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidencyArComponent } from './presidency-ar.component';

describe('PresidencyArComponent', () => {
  let component: PresidencyArComponent;
  let fixture: ComponentFixture<PresidencyArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidencyArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidencyArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
