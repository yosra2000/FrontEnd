import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployéComponent } from './view-employé.component';

describe('ViewEmployéComponent', () => {
  let component: ViewEmployéComponent;
  let fixture: ComponentFixture<ViewEmployéComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployéComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployéComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
