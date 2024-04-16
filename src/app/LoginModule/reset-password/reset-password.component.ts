import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationAdmin } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  registrationAdmin: RegistrationAdmin;

  mainList: any;
  demo: any;
  RegistrationAdminId: any;
  confirmPassword: any
  newPassword:any


  constructor(private router: Router, private http: HttpClient,
    private service: WebServiceServiceService, private route: ActivatedRoute,) {

    this.registrationAdmin = new RegistrationAdmin();

    this.mainList = [];
    this.demo = 0;
    // this.confirmPassword = ""

    this.route.params.subscribe((params) => {
      debugger
      this.RegistrationAdminId = params['RegistrationAdminId'];
      console.log("addclient", this.RegistrationAdminId)

      this.service.GetRegistrationAdminById(this.RegistrationAdminId).subscribe((result) => {

        this.registrationAdmin = result;
        console.log("this.registrationAdmin", this.registrationAdmin);

      });

    });

  }

  OnSubmit() {
    console.log(this.newPassword, "this.newPassword")
    console.log(this.confirmPassword, "this.confirmPassword")
    if (this.newPassword == this.confirmPassword) {
      console.log("final", this.registrationAdmin)
      this.registrationAdmin.Password=this.newPassword
      this.service.UpdateRegistrationAdmin(this.registrationAdmin).subscribe((result) => {
        console.log("hhh", result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Saved Successfully.');
          this.router.navigate(['/app-login']);
        }
      });
    } else {
      alert("password not match")
    }

  }

}