import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  ProjectList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.ProjectList=[]
    }
  
  
    Edit(ProjectId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+ProjectId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(ProjectId) {  
      alert('Are you sure you want to delete?');
      this.service.DeleteProject(ProjectId).subscribe(result => {
        if (result == "Success") {
        this.ProjectList = this.ProjectList.filter( 
          (item) => item.ProjectId != ProjectId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(ProjectId): void{
      try {
        this.router.navigateByUrl("/ViewProjectList/" + ProjectId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllProject().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.ProjectList.push(data);   
        }     
             console.log("ProjectList",this.ProjectList);
      });
  
    }
  }
  
  

