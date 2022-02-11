import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCondidatComponent } from './add-condidat.component';

describe('AddCondidatComponent', () => {
  let component: AddCondidatComponent;
  let fixture: ComponentFixture<AddCondidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
