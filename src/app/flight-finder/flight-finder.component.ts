import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadFlight } from '../shared/models/headflight.model';
import { DatasharingService } from '../datasharing.service';
import { Traveler } from '../shared/models/traveler.model';

@Component({
  selector: 'app-flight-finder',
  templateUrl: './flight-finder.component.html',
  styleUrls: ['./flight-finder.component.css']
})
export class FlightFinderComponent implements OnInit {

  passengers: number[] = [1,2,3,4,5,6];
  destinations: string[] = ['United Kingdom','United States','Germany','South Korea','Singapure','Dubai'];
  dDate = new Date().toISOString();
  rDate = new Date().toISOString();
  mainHeader: HeadFlight;
  travelers: Traveler[];

  constructor(private router: Router,
    public dataservice: DatasharingService) { 
      
     this.mainHeader = {
        departureDate:"",
        arrivalDate: "",
        departure:"",
        destination:"",
        passengers:0
      };

    this.travelers = [
      {
        firstName: "",
        lastName: "",
        documentType: "",
        documentNumber: "",
        gender:"",
        dateOfBirth: "",
        address: "",
        city: "",
        country: "",
        email: "",
        primaryPhone: ""
      }
    ];


  }

  ngOnInit() {
  }

  setPassenger(passengers:number){
    this.mainHeader.passengers = passengers;
    console.log(passengers);
  }
  
  setDeparture(departure:string){
    this.mainHeader.departure = departure;
    console.log(departure);
  }
  
  setDestination(destination:string){
    this.mainHeader.destination = destination;
    console.log(destination);
  }

  onSubmit(){
    this.mainHeader.departureDate = this.dDate.toString().slice(0,10);
    this.mainHeader.arrivalDate = this.rDate.toString().slice(0,10);
    
    this.dataservice.setHeadFlightHeader(this.mainHeader);
    console.log(this.mainHeader);
    //this.dataservice.setTravelers(this.travelers)
    this.router.navigate(['flights']);
  }


}
