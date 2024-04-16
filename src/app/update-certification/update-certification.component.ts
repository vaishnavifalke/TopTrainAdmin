import { Component, OnInit } from '@angular/core';
import { Certification } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';
@Component({
  selector: 'app-update-certification',
  templateUrl: './update-certification.component.html',
  styleUrls: ['./update-certification.component.scss']
})
export class UpdateCertificationComponent implements OnInit {
  CertificationId:any
  certification:Certification

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.certification = new Certification();
     
      this.route.params.subscribe((params) => {
        this.CertificationId = params['CertificationId'];
        console.log("this.CertificationId",this.CertificationId)
        this.service.GetCertificationById(this.CertificationId).subscribe((result) => {
          
          this.certification = result;
          console.log("certification",this.certification);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.certification);
            
            this.service.UpdateCertification(this.certification).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.certification.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavecertificationImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}



