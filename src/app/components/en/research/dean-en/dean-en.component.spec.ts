import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanEnComponent } from './dean-en.component';

describe('DeanEnComponent', () => {
  let component: DeanEnComponent;
  let fixture: ComponentFixture<DeanEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
