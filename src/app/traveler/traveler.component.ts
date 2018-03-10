import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PassFlight } from '../shared/models/passflight.model';
import { DatasharingService } from '../datasharing.service';
import { Traveler } from '../shared/models/traveler.model';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {

  documentTypes: string[] = ['Passport','Id'];
  pass: PassFlight;
  travelers: Traveler[];

  constructor(private router: Router,
              private dataService: DatasharingService) {

    this.travelers = [
          {
            firstName:"--",
            lastName:"",
            documentType:"",
            documentNumber:"",
            dateOfBirth:"",
            gender:"",
            address:"",
            city:"",
            country:"",
            email:"",
            primaryPhone:""
          }
    ];

  }

  ngOnInit() {
    this.pass = this.dataService.getPassFlight();
    console.log(this.dataService.getPassFlight());
    //console.log(this.dataService.getPassFlight().travelers);
    this.travelers = this.dataService.getPassFlight().travelers;
  }

  setDocumentType(traveler: Traveler, docu){
    traveler.documentType = docu;
    console.log(this.travelers);
  }

  setGender(traveler:Traveler,genderValue){
    traveler.gender = genderValue;
    console.log(genderValue);
  }

  onSubmit(){
    this.pass.travelers = this.travelers;
    
    console.log(this.pass.travelers);

    this.dataService.setPassFlight(this.pass);
    this.router.navigate(['payment']);
  }

}
