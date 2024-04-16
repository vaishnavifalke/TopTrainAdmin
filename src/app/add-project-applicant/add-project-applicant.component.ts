import { Component, OnInit } from '@angular/core';
import { ProjectApplicant } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-project-applicant',
  templateUrl: './add-project-applicant.component.html',
  styleUrls: ['./add-project-applicant.component.scss']
})
export class AddProjectApplicantComponent implements OnInit {
  projectApplicant: ProjectApplicant;
  projectApplicantlist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.projectApplicant = new ProjectApplicant();
    this.projectApplicantlist = [];
  }

  OnSubmit() {
    console.log("prop", this.projectApplicant);
    this.service.AddProjectApplicant(this.projectApplicant).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  ngOnInit(): void {

  }
}




