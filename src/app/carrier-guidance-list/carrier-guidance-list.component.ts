import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-carrier-guidance-list',
  templateUrl: './carrier-guidance-list.component.html',
  styleUrls: ['./carrier-guidance-list.component.scss']
})
export class CarrierGuidanceListComponent implements OnInit {
  CarrierGuidanceList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.CarrierGuidanceList=[]
    }
  
  
    Edit(CarrierGuidanceId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+CarrierGuidanceId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(CarrierGuidanceId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteCarrierGuidance(CarrierGuidanceId).subscribe(result => {
        if (result == "Success") {
        this.CarrierGuidanceList = this.CarrierGuidanceList.filter( 
          (item) => item.CarrierGuidanceId != CarrierGuidanceId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(CarrierGuidanceId): void{
      try {
        this.router.navigateByUrl("/ViewCarrierGuidanceList/" + CarrierGuidanceId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllCarrierGuidance().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.CarrierGuidanceList.push(data);   
        }     
             console.log("CarrierGuidanceList",this.CarrierGuidanceList);
      });
  
    }
  }
  
  