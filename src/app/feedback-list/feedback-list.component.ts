import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {
  FeedbackList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.FeedbackList=[]
    }
  
  
    Edit(FeedbackId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+FeedbackId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(FeedbackId) {  
      alert('Are you sure you want to delete?');
      this.service.DeleteFeedback(FeedbackId).subscribe(result => {
        if (result == "Success") {
        this.FeedbackList = this.FeedbackList.filter( 
          (item) => item.FeedbackId != FeedbackId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(FeedbackId): void{
      try {
        this.router.navigateByUrl("/ViewFeedbackList/" + FeedbackId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllFeedback().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.FeedbackList.push(data);   
        }     
             console.log("FeedbackList",this.FeedbackList);
      });
  
    }
  }
  
  
