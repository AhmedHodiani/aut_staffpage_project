import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilEnComponent } from './council-en.component';

describe('CouncilEnComponent', () => {
  let component: CouncilEnComponent;
  let fixture: ComponentFixture<CouncilEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
