import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsArComponent } from './programs-ar.component';

describe('ProgramsArComponent', () => {
  let component: ProgramsArComponent;
  let fixture: ComponentFixture<ProgramsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
