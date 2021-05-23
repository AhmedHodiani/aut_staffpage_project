import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniArComponent } from './alumni-ar.component';

describe('AlumniArComponent', () => {
  let component: AlumniArComponent;
  let fixture: ComponentFixture<AlumniArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
