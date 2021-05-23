import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniEnComponent } from './alumni-en.component';

describe('AlumniEnComponent', () => {
  let component: AlumniEnComponent;
  let fixture: ComponentFixture<AlumniEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
