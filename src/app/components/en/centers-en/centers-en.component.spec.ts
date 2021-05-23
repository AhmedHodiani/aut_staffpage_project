import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersEnComponent } from './centers-en.component';

describe('CentersEnComponent', () => {
  let component: CentersEnComponent;
  let fixture: ComponentFixture<CentersEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
