import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarrierGuidanceComponent } from './add-carrier-guidance/add-carrier-guidance.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddMockInterviewComponent } from './add-mock-interview/add-mock-interview.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectApplicantComponent } from './add-project-applicant/add-project-applicant.component';
import { AddUserGoalComponent } from './add-user-goal/add-user-goal.component';
import { CarrierGuidanceListComponent } from './carrier-guidance-list/carrier-guidance-list.component';
import { CertificationListComponent } from './certification-list/certification-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { MockInterviewListComponent } from './mock-interview-list/mock-interview-list.component';
import { ProjectApplicantListComponent } from './project-applicant-list/project-applicant-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateCarrierGuidanceComponent } from './update-carrier-guidance/update-carrier-guidance.component';
import { UpdateCertificationComponent } from './update-certification/update-certification.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { UpdateMockInterviewComponent } from './update-mock-interview/update-mock-interview.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateProjectApplicantComponent } from './update-project-applicant/update-project-applicant.component';
import { UpdateUserGoalComponent } from './update-user-goal/update-user-goal.component';
import { UserGoalListComponent } from './user-goal-list/user-goal-list.component';
import { LoginComponent } from './LoginModule/login/login.component';
import { ForgetPasswordComponent } from './LoginModule/forget-password/forget-password.component';
import { VerifyEmailComponent } from './LoginModule/verify-email/verify-email.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { OTPComponent } from './LoginModule/otp/otp.component';
import { AdminDashboardComponent } from './LoginModule/admin-dashboard/admin-dashboard.component';

// import { AssignRoleComponent } from './LoginModule/assign-role/assign-role.component';

const routes: Routes = [

  
  {path:"app-add-carrier-guidance",component:AddCarrierGuidanceComponent},
  {path:"app-add-certification",component:AddCertificationComponent},
  {path:"app-add-event",component:AddEventComponent},
  {path:"app-add-feedback",component:AddFeedbackComponent},
  {path:"app-add-mock-interview",component:AddMockInterviewComponent},
  {path:"app-add-project",component:AddProjectComponent},
  {path:"app-add-project-applicant",component:AddProjectApplicantComponent},
  {path:"app-add-user-goal",component:AddUserGoalComponent},


  {path:"app-carrier-guidance-list",component:CarrierGuidanceListComponent},
  {path:"app-certification-list",component:CertificationListComponent},
  {path:"app-event-list",component:EventListComponent},
  {path:"app-feedback-list",component:FeedbackListComponent},
  {path:"app-mock-interview-list",component:MockInterviewListComponent},
  {path:"app-project-applicant-list",component:ProjectApplicantListComponent},
  {path:"app-project-list",component:ProjectListComponent},
  {path:"app-user-goal-list",component:UserGoalListComponent},


  {path:"app-update-carrier-guidance",component:UpdateCarrierGuidanceComponent},
  {path:"app-update-certification",component:UpdateCertificationComponent},
  {path:"app-update-event",component:UpdateEventComponent},
  {path:"app-update-feedback",component:UpdateFeedbackComponent},
  {path:"app-update-mock-interview",component:UpdateMockInterviewComponent},
  {path:"app-update-project",component:UpdateProjectComponent},
  {path:"app-update-project-applicant",component:UpdateProjectApplicantComponent},
  {path:"app-update-user-goal",component:UpdateUserGoalComponent},
  
 
  {path:'',component:LoginComponent},
  {path:'app-login',component:LoginComponent},
  {path:'app-forget-password',component:ForgetPasswordComponent},
  {path:'app-verify-email/:RegistrationAdminId',component:VerifyEmailComponent},
  {path:'app-reset-password/:RegistrationAdminId',component:ResetPasswordComponent},
  {path:'app-otp/:RegistrationAdminId',component:OTPComponent},
  {path:'app-admin-dashboard',component:AdminDashboardComponent},
 
  // {path:'app-assign-role',component:AssignRoleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 

 }
