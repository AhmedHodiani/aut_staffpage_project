import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryEnComponent } from './gallary-en.component';

describe('GallaryEnComponent', () => {
  let component: GallaryEnComponent;
  let fixture: ComponentFixture<GallaryEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
