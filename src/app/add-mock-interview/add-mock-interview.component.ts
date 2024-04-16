import { Component, OnInit } from '@angular/core';
import { MockInterview } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-mock-interview',
  templateUrl: './add-mock-interview.component.html',
  styleUrls: ['./add-mock-interview.component.scss']
})
export class AddMockInterviewComponent implements OnInit {
  mockInterview: MockInterview;
  mockInterviewlist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.mockInterview = new MockInterview();
    this.mockInterviewlist = [];
  }

  OnSubmit() {
    console.log("prop", this.mockInterview);
    this.service.AddMockInterview(this.mockInterview).subscribe((result) => {
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


