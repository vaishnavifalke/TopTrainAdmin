import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectApplicantComponent } from './add-project-applicant.component';

describe('AddProjectApplicantComponent', () => {
  let component: AddProjectApplicantComponent;
  let fixture: ComponentFixture<AddProjectApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
