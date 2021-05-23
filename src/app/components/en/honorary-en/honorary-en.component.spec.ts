import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryEnComponent } from './honorary-en.component';

describe('HonoraryEnComponent', () => {
  let component: HonoraryEnComponent;
  let fixture: ComponentFixture<HonoraryEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonoraryEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonoraryEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
