import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployéComponent } from './add-employé.component';

describe('AddEmployéComponent', () => {
  let component: AddEmployéComponent;
  let fixture: ComponentFixture<AddEmployéComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployéComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployéComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
