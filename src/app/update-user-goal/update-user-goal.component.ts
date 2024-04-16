import { Component, OnInit } from '@angular/core';
import { UserGoal } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-user-goal',
  templateUrl: './update-user-goal.component.html',
  styleUrls: ['./update-user-goal.component.scss']
})
export class UpdateUserGoalComponent implements OnInit {
  UserGoalId:any
  userGoal:UserGoal

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.userGoal = new UserGoal();
     
      this.route.params.subscribe((params) => {
        this.UserGoalId = params['UserGoalId'];
        console.log("this.UserGoalId",this.UserGoalId)
        this.service.GetUserGoalById(this.UserGoalId).subscribe((result) => {
          
          this.userGoal = result;
          console.log("userGoal",this.userGoal);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.userGoal);
            
            this.service.UpdateUserGoal(this.userGoal).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.userGoal.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveuserGoalImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}






