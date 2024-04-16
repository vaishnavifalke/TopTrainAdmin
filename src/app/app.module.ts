import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddCarrierGuidanceComponent } from './add-carrier-guidance/add-carrier-guidance.component';
import { CarrierGuidanceListComponent } from './carrier-guidance-list/carrier-guidance-list.component';
import { UpdateCarrierGuidanceComponent } from './update-carrier-guidance/update-carrier-guidance.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateMockInterviewComponent } from './update-mock-interview/update-mock-interview.component';
import { UpdateCertificationComponent } from './update-certification/update-certification.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateProjectApplicantComponent } from './update-project-applicant/update-project-applicant.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { UpdateUserGoalComponent } from './update-user-goal/update-user-goal.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddMockInterviewComponent } from './add-mock-interview/add-mock-interview.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectApplicantComponent } from './add-project-applicant/add-project-applicant.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddUserGoalComponent } from './add-user-goal/add-user-goal.component';
import { EventListComponent } from './event-list/event-list.component';
import { MockInterviewListComponent } from './mock-interview-list/mock-interview-list.component';
import { CertificationListComponent } from './certification-list/certification-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectApplicantListComponent } from './project-applicant-list/project-applicant-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UserGoalListComponent } from './user-goal-list/user-goal-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './LoginModule/login/login.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';



import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login'; 
import { ForgetPasswordComponent } from './LoginModule/forget-password/forget-password.component';
import { VerifyEmailComponent } from './LoginModule/verify-email/verify-email.component';
import { OTPComponent } from './LoginModule/otp/otp.component';
import { AdminDashboardComponent } from './LoginModule/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AddCarrierGuidanceComponent,
    CarrierGuidanceListComponent,
    UpdateCarrierGuidanceComponent,
    UpdateEventComponent,
    UpdateMockInterviewComponent,
    UpdateCertificationComponent,
    UpdateProjectComponent,
    UpdateProjectApplicantComponent,
    UpdateFeedbackComponent,
    UpdateUserGoalComponent,
    AddEventComponent,
    AddMockInterviewComponent,
    AddCertificationComponent,
    AddProjectComponent,
    AddProjectApplicantComponent,
    AddFeedbackComponent,
    AddUserGoalComponent,
    EventListComponent,
    MockInterviewListComponent,
    CertificationListComponent,
    ProjectListComponent,
    ProjectApplicantListComponent,
    FeedbackListComponent,
    UserGoalListComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    OTPComponent,
    AdminDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
   ReactiveFormsModule

  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1089927070008-aqfos8m7qh8ogb40bpff910l9ca7h9tk.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
