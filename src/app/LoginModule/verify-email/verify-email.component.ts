import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationAdmin } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;


  RegistrationAdminId: any;
   registrationAdmin: RegistrationAdmin;
   RegistrationAdminlist: any[];
   showPassword: boolean;
   mainList: any[];
   otp1: any;
   otp2: any;
   otp3: any;
   otp4: any;
   otp5: any;
   otp6: any;
   
   constructor(private renderer: Renderer2,private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: WebServiceServiceService) {
    this.registrationAdmin = new RegistrationAdmin();
    this.RegistrationAdminlist = [];
    this.mainList=[]
    
    // this.RegistrationAdminId =0
    this.route.params.subscribe((params) => {
      debugger
      
       this.RegistrationAdminId = params['RegistrationAdminId'];
     //  this.Id = JSON.parse(localStorage.getItem('SID'));
      console.log(" this.RegistrationAdminId",this.RegistrationAdminId)
    });
            
  }

  moveToNext(currentInput: any, nextInput: any): void {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }

  OnSubmit1(){
    debugger
    console.log("this.otp1,this.otp2",this.otp1,this.otp2)
    
  // this.RegistrationAdmin.OTPNo = this.otp;
  // this.generateOTP();
  this.RegistrationAdminlist=[]
  this.mainList=[]
   
  this.service.GetRegistrationAdminById(this.RegistrationAdminId).subscribe((result) => {
      
   this.registrationAdmin = result;
   console.log("this.registrationAdmin.OTPNo",this.registrationAdmin.OTPNo)
   if(this.registrationAdmin.OTPNo==this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6){
     alert("otp Matched")


     this.registrationAdmin.EmailStatus = "Active";
     this.service.UpdateRegistrationAdmin(this.registrationAdmin).subscribe((result) => {
       if (result == 0) {
         alert('Not updated!');

       } else {
        alert("Email activate Succesfully")
        //  this.router.navigateByUrl("/VerifyEmail/" + this.Id);
         this.router.navigate(['app-login'])

         //  this.router.navigate(['otp']);
       }
     });


     
    //  this.router.navigateByUrl("/ResetPassword/" + this.Id);
   }else{
     alert("otp not Matched")
   }
  

 });

}

}