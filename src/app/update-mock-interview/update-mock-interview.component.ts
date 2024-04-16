import { Component, OnInit } from '@angular/core';
import { MockInterview } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-mock-interview',
  templateUrl: './update-mock-interview.component.html',
  styleUrls: ['./update-mock-interview.component.scss']
})
export class UpdateMockInterviewComponent implements OnInit {
  MockInterviewId:any
  mockInterview:MockInterview

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.mockInterview = new MockInterview();
     
      this.route.params.subscribe((params) => {
        this.MockInterviewId = params['MockInterviewId'];
        console.log("this.MockInterviewId",this.MockInterviewId)
        this.service.GetMockInterviewById(this.MockInterviewId).subscribe((result) => {
          
          this.mockInterview = result;
          console.log("mockInterview",this.mockInterview);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.mockInterview);
            
            this.service.UpdateMockInterview(this.mockInterview).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.mockInterview.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavemockInterviewImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}






