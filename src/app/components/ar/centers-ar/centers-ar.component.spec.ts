import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersArComponent } from './centers-ar.component';

describe('CentersArComponent', () => {
  let component: CentersArComponent;
  let fixture: ComponentFixture<CentersArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
