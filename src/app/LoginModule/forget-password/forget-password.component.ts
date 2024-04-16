import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationAdmin } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  registrationAdminlist: any[]
  mainlist: any[]
  mainlist1:any[]
  registrationAdmin: RegistrationAdmin;
  RegistrationAdminId:any

  constructor(private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) {
    this.registrationAdmin = new RegistrationAdmin();
    this.registrationAdminlist = []
    this.mainlist = []
    this.mainlist1=[]
   
  }
  OnSubmit() {
    this.registrationAdminlist = []
    this.service.GetAllRegistrationAdmin().subscribe((result) => {
      console.log(result);
      debugger
      for (let data of result) {
        this.registrationAdminlist.push(data);
      }
      console.log("registrationAdmin", this.registrationAdminlist); //Email

      this.mainlist = this.registrationAdminlist.filter(x => x.Email == this.registrationAdmin.Email);
      console.log("e1", this.mainlist);

      if (this.mainlist.length == 1) {
        alert('Email RegistrationAdminId Existed');
        this.SendOTPEmail()
      }

      else {
        alert("Invalid Email RegistrationAdminId");

      }
    });

  }


  SendOTPEmail() {
    this.registrationAdminlist = []
    this.mainlist = []
    this.mainlist1=[]
    this.service.SendOTPEmail(this.registrationAdmin.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")

        console.log('Email sent successfully:', response);
        //this.router.navigate(['otp']);
        this.registrationAdmin.OTPNo = response.otp;
        console.log('Received OTP:', this.registrationAdmin.OTPNo);
        //this.storeotp();
        this.service.GetAllRegistrationAdmin().subscribe((result) => {
          this.registrationAdminlist = result;
          this.mainlist1 = this.registrationAdminlist.filter(x => x.Email == this.registrationAdmin.Email);

          for (let data1 of this.mainlist1) {
            this.RegistrationAdminId = data1.RegistrationAdminId;
            // this.sendVerificationEmail(this.demo);
          }
          debugger
          this.service.GetRegistrationAdminById(this.RegistrationAdminId).subscribe((result) => {
            this.registrationAdmin = result;
            console.log("fun", this.registrationAdmin);

            // Invoke OnSubmit here
            //this.OnUpdate();
            this.registrationAdmin.OTPNo = response.otp;
            this.service.UpdateRegistrationAdmin(this.registrationAdmin).subscribe((result) => {
              if (result == 0) {
                alert('Not updated!');

              } else {
                alert('updated successfully');
                this.router.navigateByUrl("/app-otp/" + this.RegistrationAdminId);

                
              }
            });
          });
        });
      }
    });
  }


}