import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryArComponent } from './honorary-ar.component';

describe('HonoraryArComponent', () => {
  let component: HonoraryArComponent;
  let fixture: ComponentFixture<HonoraryArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonoraryArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonoraryArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
