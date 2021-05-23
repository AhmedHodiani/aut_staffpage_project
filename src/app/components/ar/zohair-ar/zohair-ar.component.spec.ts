import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohairArComponent } from './zohair-ar.component';

describe('ZohairArComponent', () => {
  let component: ZohairArComponent;
  let fixture: ComponentFixture<ZohairArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohairArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohairArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
