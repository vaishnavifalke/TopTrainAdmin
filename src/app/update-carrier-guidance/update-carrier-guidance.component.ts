import { Component, OnInit } from '@angular/core';
import { CarrierGuidance } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';


@Component({
  selector: 'app-update-carrier-guidance',
  templateUrl: './update-carrier-guidance.component.html',
  styleUrls: ['./update-carrier-guidance.component.scss']
})
export class UpdateCarrierGuidanceComponent implements OnInit {
  CarrierGuidanceId:any
  carrierGuidance:CarrierGuidance

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.carrierGuidance = new CarrierGuidance();
     
      this.route.params.subscribe((params) => {
        this.CarrierGuidanceId = params['CarrierGuidanceId'];
        console.log("this.CarrierGuidanceId",this.CarrierGuidanceId)
        this.service.GetCarrierGuidanceById(this.CarrierGuidanceId).subscribe((result) => {
          
          this.carrierGuidance = result;
          console.log("carrierGuidance",this.carrierGuidance);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.carrierGuidance);
            
            this.service.UpdateCarrierGuidance(this.carrierGuidance).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.carrierGuidance.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavecarrierGuidanceImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}



