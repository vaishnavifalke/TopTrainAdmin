// import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationAdmin} from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationAdmin: RegistrationAdmin
  searchText1: any
  searchText2: any
  mainlist: any[] = []
  registrationAdminList: any[] = []
  emailStatus: any
  registrationAdminId: any
  defaultRole: any
  userid: any
  user: any
  loggedIn: any
  newId:any
 
  constructor(private authService: SocialAuthService, private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
     
      

      
      this.registrationAdmin = new RegistrationAdmin();
      // this.userRole = new UserRole();
    }
  
  
  
    OnSubmit() {
      console.log("registrationAdmin", this.registrationAdmin);
  
      this.service.GetAllRegistrationAdmin().subscribe((result) => {
        this.mainlist = []
        this.registrationAdminList = []
        for (let data of result) {
          this.registrationAdminList.push(data);
        }
        this.mainlist = this.registrationAdminList.filter(x => x.Email == this.searchText1);
        console.log("this.mainlist.length on s", this.mainlist.length);
        if (this.mainlist.length == 1) {
          this.emailStatus = this.mainlist[0].EmailStatus;
          this.registrationAdminId = this.mainlist[0].RegistrationAdminId;
          this.defaultRole = this.mainlist[0].DefaultRole;
          console.log("this.emailStatus", this.emailStatus);
  
          //check EmailStatus
          if (this.emailStatus == "Active") {
            this.service.Login(this.searchText1, this.searchText2).subscribe((result) => {
              if (result.RegistrationAdminId == 0) {
                alert('Invalid Email or Password.');
              }
              else {
                localStorage.setItem('SID', result.RegistrationAdminId);
                alert("Login Successfully");
  
                if (this.defaultRole == "2") {
                  this.router.navigateByUrl("/app-user-dashboard");
                } else {
                  this.router.navigateByUrl("/app-admin-dashboard");
                }
  
  
              }
            })
          }
          else {
            alert("Please Activate Your mail First.")
            this.router.navigateByUrl("/app-verify-email/" + this.registrationAdminId);
          }
  
  
        }
        else {
          alert("Please Signup first")
        }
  
      })
    }
  
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log("this.user", this.user)
  
        this.service.GetAllRegistrationAdmin().subscribe((result) => {
          this.mainlist = []
          this.registrationAdminList = []
          for (let data of result) {
            this.registrationAdminList.push(data);
          }
          this.mainlist = this.registrationAdminList.filter(x => x.Email == this.user.email);
  
  
          if (this.mainlist.length == 0) {
            //mail not exist then Add new record
            this.registrationAdmin.FName = this.user.firstName
            this.registrationAdmin.LName = this.user.lastName
  
            this.registrationAdmin.Email = this.user.email
            this.registrationAdmin.OTPNo = ""
            this.registrationAdmin.Password = ""
            this.registrationAdmin.EmailStatus = "Active"
            this.registrationAdmin.Status = "Active"
            this.registrationAdmin.DefaultRole="2"
  
            this.service.AddRegistrationAdmin(this.registrationAdmin).subscribe((result) => {
              if (result > 0) {
                alert('Signup Successfully.');
  
                   //Add Default user Role as a EndUser
              // this.userRole.RegistrationAdminId=result
              // this.userRole.RoleId=2
              // this.userRole.Status="Active"
              // this.service.AddUserRole(this.userRole).subscribe((result) => {
              //   if (result > 0) {
              //     alert('add user Role Successfully.');
              //     this.router.navigateByUrl("/app-user-dashboard");
  
              //   }
              //   else {
              //     alert("Something went wrong! Please try again.")
              //   }
              // });
  
              }
              else {
                alert("Something went wrong! Please try again.")
              }
            });
          }
          else {
            
            
            this.service.GetRegistrationAdminByEmail(this.user.email).subscribe((result) => {
              this.registrationAdmin = result; 
              this.newId = this.registrationAdmin.RegistrationAdminId
              localStorage.setItem('SID', this.newId);
              this.userid = JSON.parse(localStorage.getItem('SID'));
              console.log( "userid", this.userid);
              if (this.userid == 0) {
                alert("Something went wrong! Please try again.");
              }
              else {
                alert("User registred alredy ");
  
                if (this.registrationAdmin.DefaultRole == '2') {
                  this.router.navigateByUrl("/app-user-dashboard");
                } else {
                  this.router.navigateByUrl("/VendorDashboard");
                }
  
              }
            })
  
  
  
          }
        })
  
      });
    }
  
  
  
  
  
  }
  