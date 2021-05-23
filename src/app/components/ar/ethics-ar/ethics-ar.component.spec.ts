import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsArComponent } from './ethics-ar.component';

describe('EthicsArComponent', () => {
  let component: EthicsArComponent;
  let fixture: ComponentFixture<EthicsArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicsArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
