import { Component, OnInit } from '@angular/core';
import { UserGoal } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-user-goal',
  templateUrl: './add-user-goal.component.html',
  styleUrls: ['./add-user-goal.component.scss']
})
export class AddUserGoalComponent implements OnInit {
  userGoal: UserGoal;
  userGoallist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.userGoal = new UserGoal();
    this.userGoallist = [];
  }

  OnSubmit() {
    console.log("prop", this.userGoal);
    this.service.AddUserGoal(this.userGoal).subscribe((result) => {
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




