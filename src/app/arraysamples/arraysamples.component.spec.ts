import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysamplesComponent } from './arraysamples.component';

describe('ArraysamplesComponent', () => {
  let component: ArraysamplesComponent;
  let fixture: ComponentFixture<ArraysamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
