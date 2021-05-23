import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohairEnComponent } from './zohair-en.component';

describe('ZohairEnComponent', () => {
  let component: ZohairEnComponent;
  let fixture: ComponentFixture<ZohairEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohairEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohairEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
