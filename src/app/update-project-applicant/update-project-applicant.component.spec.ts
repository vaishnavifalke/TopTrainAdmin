import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectApplicantComponent } from './update-project-applicant.component';

describe('UpdateProjectApplicantComponent', () => {
  let component: UpdateProjectApplicantComponent;
  let fixture: ComponentFixture<UpdateProjectApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
