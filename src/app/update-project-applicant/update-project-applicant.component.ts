import { Component, OnInit } from '@angular/core';
import { ProjectApplicant } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-project-applicant',
  templateUrl: './update-project-applicant.component.html',
  styleUrls: ['./update-project-applicant.component.scss']
})
export class UpdateProjectApplicantComponent implements OnInit {
  ProjectApplicantId:any
  projectApplicant:ProjectApplicant

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.projectApplicant = new ProjectApplicant();
     
      this.route.params.subscribe((params) => {
        this.ProjectApplicantId = params['ProjectApplicantId'];
        console.log("this.ProjectApplicantId",this.ProjectApplicantId)
        this.service.GetProjectApplicantById(this.ProjectApplicantId).subscribe((result) => {
          
          this.projectApplicant = result;
          console.log("projectApplicant",this.projectApplicant);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.projectApplicant);
            
            this.service.UpdateProjectApplicant(this.projectApplicant).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.projectApplicant.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveprojectApplicantImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}






