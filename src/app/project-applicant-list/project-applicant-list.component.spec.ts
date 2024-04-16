import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectApplicantListComponent } from './project-applicant-list.component';

describe('ProjectApplicantListComponent', () => {
  let component: ProjectApplicantListComponent;
  let fixture: ComponentFixture<ProjectApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectApplicantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
