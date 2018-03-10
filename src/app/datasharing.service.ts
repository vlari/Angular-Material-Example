import { Injectable } from '@angular/core';
import { HeadFlight } from './shared/models/headflight.model';
import { Traveler } from './shared/models/traveler.model';
import { PassFlight } from './shared/models/passflight.model';

@Injectable()
export class DatasharingService {

  flightHeader: HeadFlight;
  passBoard: PassFlight;
  travelers: Traveler[];

  constructor() { }

  setHeadFlightHeader(header: HeadFlight){
    
    this.travelers = [
      {
        firstName: "",
        lastName: "",
        documentType: "",
        documentNumber: "",
        dateOfBirth: "",
        gender:"",
        address: "",
        city: "",
        country: "",
        email: "",
        primaryPhone: ""
      }
    ];

    this.flightHeader = header;

    for(let g = 0; g < header.passengers ; g++){
      //var newTraveler = this.createTraveler();
      this.travelers.push(this.createTraveler());
    }

    this.travelers.pop();

  }

  setPassFlight(pass: PassFlight){
    this.passBoard = pass;
  }

  getPassFlight(){
    return this.passBoard;
  }

  getTravelers(){
    return this.travelers;
  }

  getHeadFlightHeader(){
    return this.flightHeader;
  }

  createTraveler(): Traveler{
    
    var t = new Traveler;
    
    t  = {
      firstName:"",
      lastName:"",
      documentType:"",
      documentNumber: "",
      dateOfBirth: "",
      gender:"",
      address: "",
      city:"",
      country:"",
      email:"",
      primaryPhone:""
    };
    return t;
  }

}
