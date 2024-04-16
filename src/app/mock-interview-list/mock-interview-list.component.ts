import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';


@Component({
  selector: 'app-mock-interview-list',
  templateUrl: './mock-interview-list.component.html',
  styleUrls: ['./mock-interview-list.component.scss']
})
export class MockInterviewListComponent implements OnInit {
  MockInterviewList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.MockInterviewList=[]
    }
  
  
    Edit(MockInterviewId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+MockInterviewId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(MockInterviewId) {  
      alert('Are you sure you want to delete?');
      this.service.DeleteMockInterview(MockInterviewId).subscribe(result => {
        if (result == "Success") {
        this.MockInterviewList = this.MockInterviewList.filter( 
          (item) => item.MockInterviewId != MockInterviewId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(MockInterviewId): void{
      try {
        this.router.navigateByUrl("/ViewMockInterviewList/" + MockInterviewId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllMockInterview().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.MockInterviewList.push(data);   
        }     
             console.log("MockInterviewList",this.MockInterviewList);
      });
  
    }
  }
  
  

