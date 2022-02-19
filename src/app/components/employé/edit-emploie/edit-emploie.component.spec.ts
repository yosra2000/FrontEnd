import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploieComponent } from './edit-emploie.component';

describe('EditEmploieComponent', () => {
  let component: EditEmploieComponent;
  let fixture: ComponentFixture<EditEmploieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmploieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
