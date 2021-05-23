import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainEnComponent } from './sustain-en.component';

describe('SustainEnComponent', () => {
  let component: SustainEnComponent;
  let fixture: ComponentFixture<SustainEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
