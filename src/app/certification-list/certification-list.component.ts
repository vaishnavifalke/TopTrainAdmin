import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {
  CertificationList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.CertificationList=[]
    }
  
  
    Edit(CertificationId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+CertificationId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(CertificationId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteCertification(CertificationId).subscribe(result => {
        if (result == "Success") {
        this.CertificationList = this.CertificationList.filter( 
          (item) => item.CertificationId != CertificationId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(CertificationId): void{
      try {
        this.router.navigateByUrl("/ViewCertificationList/" + CertificationId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllCertification().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.CertificationList.push(data);   
        }     
             console.log("CertificationList",this.CertificationList);
      });
  
    }
  }
  
  