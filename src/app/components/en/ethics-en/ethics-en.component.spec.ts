import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsEnComponent } from './ethics-en.component';

describe('EthicsEnComponent', () => {
  let component: EthicsEnComponent;
  let fixture: ComponentFixture<EthicsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
