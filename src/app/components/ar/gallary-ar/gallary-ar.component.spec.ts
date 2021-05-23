import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryArComponent } from './gallary-ar.component';

describe('GallaryArComponent', () => {
  let component: GallaryArComponent;
  let fixture: ComponentFixture<GallaryArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
