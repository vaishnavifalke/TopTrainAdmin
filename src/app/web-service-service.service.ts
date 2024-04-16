import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from './Global';
import { Observable } from 'rxjs';
import {CarrierGuidance,Event,MockInterview,Certification,Project,ProjectApplicant,Feedback,UserGoal,RegistrationAdmin,Login} from './Class';


@Injectable({
  providedIn: 'root'
})
export class WebServiceServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
      "Content-Security-Policy": 'upgrade-insecure-requests'
    })
  };

  IsLogin: any;
  constructor(private http: HttpClient) {
    this.IsLogin = false;
  
  
   }

    //CarrierGuidance

AddCarrierGuidance(CarrierGuidance): Observable<any> {
  return this.http.post<CarrierGuidance>(GlobalVariable.SERVICE_API_URL +"CarrierGuidance/AddCarrierGuidance",CarrierGuidance, this.httpOptions);
} 
GetAllCarrierGuidance(): Observable<any> {
  return this.http.get<CarrierGuidance>( GlobalVariable.SERVICE_API_URL +"CarrierGuidance/GetAllCarrierGuidance" , this.httpOptions);
} 
DeleteCarrierGuidance(CarrierGuidanceId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"CarrierGuidance/DeleteCarrierGuidance?CarrierGuidanceId="+CarrierGuidanceId,this.httpOptions);
}
GetCarrierGuidanceById(CarrierGuidanceId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CarrierGuidance/GetCarrierGuidanceById?CarrierGuidanceId="+CarrierGuidanceId,this.httpOptions);
} 
UpdateCarrierGuidance(CarrierGuidance): Observable<any> {
  return this.http.post<CarrierGuidance>( GlobalVariable.SERVICE_API_URL +"CarrierGuidance/UpdateCarrierGuidance?" , CarrierGuidance,this.httpOptions);
}




//Certification

AddCertification(Certification): Observable<any> {
  return this.http.post<Certification>(GlobalVariable.SERVICE_API_URL +"Certification/AddCertification",Certification, this.httpOptions);
} 
GetAllCertification(): Observable<any> {
  return this.http.get<Certification>( GlobalVariable.SERVICE_API_URL +"Certification/GetAllCertification" , this.httpOptions);
} 
DeleteCertification(CertificationId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Certification/DeleteCertification?CertificationId="+CertificationId,this.httpOptions);
}
GetCertificationById(CertificationId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Certification/GetCertificationById?CertificationId="+CertificationId,this.httpOptions);
} 
UpdateCertification(Certification): Observable<any> {
  return this.http.post<Certification>( GlobalVariable.SERVICE_API_URL +"Certification/UpdateCertification?" , Certification,this.httpOptions);
}





//Event

AddEvent(Event): Observable<any> {
  return this.http.post<Event>(GlobalVariable.SERVICE_API_URL +"Event/AddEvent",Event, this.httpOptions);
} 
GetAllEvent(): Observable<any> {
  return this.http.get<Event>( GlobalVariable.SERVICE_API_URL +"Event/GetAllEvent" , this.httpOptions);
} 
DeleteEvent(EventId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Event/DeleteEvent?EventId="+EventId,this.httpOptions);
}
GetEventById(EventId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Event/GetEventById?EventId="+EventId,this.httpOptions);
} 
UpdateEvent(Event): Observable<any> {
  return this.http.post<Event>( GlobalVariable.SERVICE_API_URL +"Event/UpdateEvent?" , Event,this.httpOptions);
}




//MockInterview

AddMockInterview(MockInterview): Observable<any> {
  return this.http.post<MockInterview>(GlobalVariable.SERVICE_API_URL +"MockInterview/AddMockInterview",MockInterview, this.httpOptions);
} 
GetAllMockInterview(): Observable<any> {
  return this.http.get<MockInterview>( GlobalVariable.SERVICE_API_URL +"MockInterview/GetAllMockInterview" , this.httpOptions);
} 
DeleteMockInterview(MockInterviewId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"MockInterview/DeleteMockInterview?MockInterviewId="+MockInterviewId,this.httpOptions);
}
GetMockInterviewById(MockInterviewId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MockInterview/GetMockInterviewById?MockInterviewId="+MockInterviewId,this.httpOptions);
} 
UpdateMockInterview(MockInterview): Observable<any> {
  return this.http.post<MockInterview>( GlobalVariable.SERVICE_API_URL +"MockInterview/UpdateMockInterview?" , MockInterview,this.httpOptions);
}



 //Project

 AddProject(Project): Observable<any> {
  return this.http.post<Project>(GlobalVariable.SERVICE_API_URL +"Project/AddProject",Project, this.httpOptions);
} 
GetAllProject(): Observable<any> {
  return this.http.get<Project>( GlobalVariable.SERVICE_API_URL +"Project/GetAllProject" , this.httpOptions);
} 
DeleteProject(ProjectId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Project/DeleteProject?ProjectId="+ProjectId,this.httpOptions);
}
GetProjectById(ProjectId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Project/GetProjectById?ProjectId="+ProjectId,this.httpOptions);
} 
UpdateProject(Project): Observable<any> {
  return this.http.post<Project>( GlobalVariable.SERVICE_API_URL +"Project/UpdateProject?" , Project,this.httpOptions);
}



//ProjectApplicant

AddProjectApplicant(ProjectApplicant): Observable<any> {
  return this.http.post<ProjectApplicant>(GlobalVariable.SERVICE_API_URL +"ProjectApplicant/AddProjectApplicant",ProjectApplicant, this.httpOptions);
} 
GetAllProjectApplicant(): Observable<any> {
  return this.http.get<ProjectApplicant>( GlobalVariable.SERVICE_API_URL +"ProjectApplicant/GetAllProjectApplicant" , this.httpOptions);
} 
DeleteProjectApplicant(ProjectApplicantId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ProjectApplicant/DeleteProjectApplicant?ProjectApplicantId="+ProjectApplicantId,this.httpOptions);
}
GetProjectApplicantById(ProjectApplicantId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ProjectApplicant/GetProjectApplicantById?ProjectApplicantId="+ProjectApplicantId,this.httpOptions);
} 
UpdateProjectApplicant(ProjectApplicant): Observable<any> {
  return this.http.post<ProjectApplicant>( GlobalVariable.SERVICE_API_URL +"ProjectApplicant/UpdateProjectApplicant?" , ProjectApplicant,this.httpOptions);
}



//Feedback

AddFeedback(Feedback): Observable<any> {
  return this.http.post<Feedback>(GlobalVariable.SERVICE_API_URL +"Feedback/AddFeedback",Feedback, this.httpOptions);
} 
GetAllFeedback(): Observable<any> {
  return this.http.get<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/GetAllFeedback" , this.httpOptions);
} 
DeleteFeedback(FeedbackId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Feedback/DeleteFeedback?FeedbackId="+FeedbackId,this.httpOptions);
}
GetFeedbackById(FeedbackId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Feedback/GetFeedbackById?FeedbackId="+FeedbackId,this.httpOptions);
} 
UpdateFeedback(Feedback): Observable<any> {
  return this.http.post<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/UpdateFeedback?" , Feedback,this.httpOptions);
}



//UserGoal

AddUserGoal(UserGoal): Observable<any> {
  return this.http.post<UserGoal>(GlobalVariable.SERVICE_API_URL +"UserGoal/AddUserGoal",UserGoal, this.httpOptions);
} 
GetAllUserGoal(): Observable<any> {
  return this.http.get<UserGoal>( GlobalVariable.SERVICE_API_URL +"UserGoal/GetAllUserGoal" , this.httpOptions);
} 
DeleteUserGoal(UserGoalId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserGoal/DeleteUserGoal?UserGoalId="+UserGoalId,this.httpOptions);
}
GetUserGoalById(UserGoalId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserGoal/GetUserGoalById?UserGoalId="+UserGoalId,this.httpOptions);
} 
UpdateUserGoal(UserGoal): Observable<any> {
  return this.http.post<UserGoal>( GlobalVariable.SERVICE_API_URL +"UserGoal/UpdateUserGoal?" , UserGoal,this.httpOptions);
}

  


  //LoginModule
//RegistrationAdmin


AddRegistrationAdmin(RegistrationAdmin): Observable<any> {
  return this.http.post<RegistrationAdmin>(GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/AddRegistrationAdmin",RegistrationAdmin, this.httpOptions);
} 
GetAllRegistrationAdmin(): Observable<any> {
  return this.http.get<RegistrationAdmin>( GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/GetAllRegistrationAdmin" , this.httpOptions);
} 
DeleteRegistrationAdmin(RegistrationAdminId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/DeleteRegistrationAdmin?RegistrationAdminId="+RegistrationAdminId,this.httpOptions);
}
GetRegistrationAdminById(RegistrationAdminId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/GetRegistrationAdminById?RegistrationAdminId="+RegistrationAdminId,this.httpOptions);
} 
UpdateRegistrationAdmin(RegistrationAdmin): Observable<any> {
  return this.http.post<RegistrationAdmin>( GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/UpdateRegistrationAdmin?" , RegistrationAdmin,this.httpOptions);
}


SendOTPEmail(Email){
  return this.http.post<any>(GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/SendOTPEmail?Email="+Email,this.httpOptions);
      }
// AddUserDetails(RegistrationAdmin): Observable<any> {
//   return this.http.post<RegistrationAdmin>(GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/AddRegistrationAdmin",RegistrationAdmin, this.httpOptions);
// } 
// SaveUserDetailsImage(formdata,CVId): Observable<any> {
//   const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"CV/SaveCVImage?CVId="+CVId, formdata, null );
//   return this.http.request(uploadReq);
// } 

GetRegistrationAdminByEmail(Email){
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"RegistrationAdmin/GetRegistrationAdminByEmail?Email="+Email,this.httpOptions);
      }


Login(Email,Password): Observable<any> {
  return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?Email="+Email+"&Password="+Password);
}

}
