import { Component, OnInit } from '@angular/core';
import { Project } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  ProjectId:any
  project:Project

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.project = new Project();
     
      this.route.params.subscribe((params) => {
        this.ProjectId = params['ProjectId'];
        console.log("this.ProjectId",this.ProjectId)
        this.service.GetProjectById(this.ProjectId).subscribe((result) => {
          
          this.project = result;
          console.log("project",this.project);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.project);
            
            this.service.UpdateProject(this.project).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.project.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveprojectImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}






