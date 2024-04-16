import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-user-goal-list',
  templateUrl: './user-goal-list.component.html',
  styleUrls: ['./user-goal-list.component.scss']
})
export class UserGoalListComponent implements OnInit {
  UserGoalList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.UserGoalList=[]
    }
  
  
    Edit(UserGoalId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+UserGoalId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(UserGoalId) {  
      alert('Are you sure you want to delete?');
      this.service.DeleteUserGoal(UserGoalId).subscribe(result => {
        if (result == "Success") {
        this.UserGoalList = this.UserGoalList.filter( 
          (item) => item.UserGoalId != UserGoalId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(UserGoalId): void{
      try {
        this.router.navigateByUrl("/ViewUserGoalList/" + UserGoalId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllUserGoal().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.UserGoalList.push(data);   
        }     
             console.log("UserGoalList",this.UserGoalList);
      });
  
    }
  }
  
  
