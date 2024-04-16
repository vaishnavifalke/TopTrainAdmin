import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  EventList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.EventList=[]
    }
  
  
    Edit(EventId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+EventId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(EventId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteEvent(EventId).subscribe(result => {
        if (result == "Success") {
        this.EventList = this.EventList.filter( 
          (item) => item.EventId != EventId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(EventId): void{
      try {
        this.router.navigateByUrl("/ViewEventList/" + EventId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllEvent().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.EventList.push(data);   
        }     
             console.log("EventList",this.EventList);
      });
  
    }
  }
  
  