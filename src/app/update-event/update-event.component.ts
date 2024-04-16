import { Component, OnInit } from '@angular/core';
import { Event } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {
  EventId:any
  event:Event

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.event = new Event();
     
      this.route.params.subscribe((params) => {
        this.EventId = params['EventId'];
        console.log("this.EventId",this.EventId)
        this.service.GetEventById(this.EventId).subscribe((result) => {
          
          this.event = result;
          console.log("event",this.event);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.event);
            
            this.service.UpdateEvent(this.event).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.event.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveeventImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}




