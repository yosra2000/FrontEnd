import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRendezVousComponent } from './add-rendez-vous.component';

describe('AddRendezVousComponent', () => {
  let component: AddRendezVousComponent;
  let fixture: ComponentFixture<AddRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
