import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContratComponent } from './view-contrat.component';

describe('ViewContratComponent', () => {
  let component: ViewContratComponent;
  let fixture: ComponentFixture<ViewContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
