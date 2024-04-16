import { Component, OnInit } from '@angular/core';
import { Event } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  event: Event;
  eventlist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.event = new Event();
    this.eventlist = [];
  }

  OnSubmit() {
    console.log("prop", this.event);
    this.service.AddEvent(this.event).subscribe((result) => {
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


