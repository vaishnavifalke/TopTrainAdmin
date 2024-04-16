import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-project-applicant-list',
  templateUrl: './project-applicant-list.component.html',
  styleUrls: ['./project-applicant-list.component.scss']
})
export class ProjectApplicantListComponent implements OnInit {
  ProjectApplicantList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.ProjectApplicantList=[]
    }
  
  
    Edit(ProjectApplicantId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+ProjectApplicantId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(ProjectApplicantId) {  
      alert('Are you sure you want to delete?');
      this.service.DeleteProjectApplicant(ProjectApplicantId).subscribe(result => {
        if (result == "Success") {
        this.ProjectApplicantList = this.ProjectApplicantList.filter( 
          (item) => item.ProjectApplicantId != ProjectApplicantId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(ProjectApplicantId): void{
      try {
        this.router.navigateByUrl("/ViewProjectApplicantList/" + ProjectApplicantId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllProjectApplicant().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.ProjectApplicantList.push(data);   
        }     
             console.log("ProjectApplicantList",this.ProjectApplicantList);
      });
  
    }
  }
  
  

