import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';


@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.scss']
})
export class UpdateFeedbackComponent implements OnInit {
  FeedbackId:any
  feedback:Feedback

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.feedback = new Feedback();
     
      this.route.params.subscribe((params) => {
        this.FeedbackId = params['FeedbackId'];
        console.log("this.FeedbackId",this.FeedbackId)
        this.service.GetFeedbackById(this.FeedbackId).subscribe((result) => {
          
          this.feedback = result;
          console.log("feedback",this.feedback);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.feedback);
            
            this.service.UpdateFeedback(this.feedback).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.feedback.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavefeedbackImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}





