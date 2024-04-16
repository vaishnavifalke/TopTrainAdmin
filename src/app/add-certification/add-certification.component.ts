import { Component, OnInit } from '@angular/core';
import { Certification } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.scss']
})
export class AddCertificationComponent implements OnInit {
  certification: Certification;
  certificationlist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.certification = new Certification();
    this.certificationlist = [];
  }

  OnSubmit() {
    console.log("prop", this.certification);
    this.service.AddCertification(this.certification).subscribe((result) => {
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

