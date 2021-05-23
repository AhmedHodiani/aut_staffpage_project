import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsEnComponent } from './programs-en.component';

describe('ProgramsEnComponent', () => {
  let component: ProgramsEnComponent;
  let fixture: ComponentFixture<ProgramsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
