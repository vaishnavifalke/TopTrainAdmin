import { Component, OnInit } from '@angular/core';
import { CarrierGuidance } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-carrier-guidance',
  templateUrl: './add-carrier-guidance.component.html',
  styleUrls: ['./add-carrier-guidance.component.scss']
})
export class AddCarrierGuidanceComponent implements OnInit {
  carrierGuidance: CarrierGuidance;
  carrierGuidancelist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.carrierGuidance = new CarrierGuidance();
    this.carrierGuidancelist = [];
  }

  OnSubmit() {
    console.log("prop", this.carrierGuidance);
    this.service.AddCarrierGuidance(this.carrierGuidance).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  ngOnInit(): void {

  }
}
