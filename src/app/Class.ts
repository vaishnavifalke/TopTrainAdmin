export class CarrierGuidance {
    CarrierGuidanceId: number;
    RegistrationId: number;
    UserEducationId: number;
    Title: string;
    Description: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class Event {
    EventId: number;
    RegistrationId: number;
    CompanyMasterId: number;
    EventName: string;
    Description: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class MockInterview {
    MockInterviewId: number;
    RegistrationId: number;
    InterviewDate: string;
    Interviewer: string;
    Feedback: string;
    Status: string;
    
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class Certification {
    CertificationId: number;
    RegistrationId: number;
    CertificationName: string;
    Issuer: string;
    CertificationPurchaseDate: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}

export class Project {
    ProjectId: number;
    RegistrationId: number;
    Title: string;
    Description: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class ProjectApplicant {
    ProjectApplicantId: number;
    ProjectId: number;
    RegistrationId: number;
    Status: string;
    
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class Feedback {
    FeedbackId: number;
    RegistrationId: number;
    CourseId: number;
    FeedbackDescription: string;
    Date: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class UserGoal {
    UserGoalId: number;
    RegistrationId: number;
    GoalDescription: string;
    TargetDate: string;
    Progress: string;
    Status: string;
    
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}



export class RegistrationAdmin{
    
    RegistrationAdminId : number;
    
    FName: string;
    LName: string;
    Email:string;
    Password :string;
    EmailStatus :string;
    OTPNo: string;
    DefaultRole:string;
    Status: string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}


export class Login{
    Email:string;
    Password:string;
}
