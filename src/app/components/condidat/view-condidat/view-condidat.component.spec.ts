import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCondidatComponent } from './view-condidat.component';

describe('ViewCondidatComponent', () => {
  let component: ViewCondidatComponent;
  let fixture: ComponentFixture<ViewCondidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
