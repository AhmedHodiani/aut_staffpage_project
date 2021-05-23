import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilArComponent } from './council-ar.component';

describe('CouncilArComponent', () => {
  let component: CouncilArComponent;
  let fixture: ComponentFixture<CouncilArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
