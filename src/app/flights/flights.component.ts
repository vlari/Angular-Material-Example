import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/models/flight.model';
import { HeadFlight } from '../shared/models/headflight.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasharingService } from '../datasharing.service';
import { Traveler } from '../shared/models/traveler.model';
import { PassFlight } from '../shared/models/passflight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  myHead: HeadFlight;
  travelers: Traveler[];
  pass: PassFlight;

  departureFlights: Flight[] = [
    {initial:this.myHead, departingTime:"6:00 PM",returningTime: "12:00 PM" ,plane:"001",gate:"A00",seats:20,duration:"6h54",price:500},
    {initial:this.myHead, departingTime:"12:00 PM",returningTime: "6:00 AM" ,plane:"002",gate:"A01",seats:15,duration:"6h54",price:450}
  ];

  returningFlights: Flight[] = [
    {initial:this.myHead, departingTime:"6:00 PM",returningTime: "12:00 PM" ,plane:"001",gate:"A00",seats:20,duration:"6h54",price:500},
    {initial:this.myHead, departingTime:"12:00 PM",returningTime: "6:00 AM" ,plane:"002",gate:"A01",seats:15,duration:"6h54",price:450}
  ];

  forFlight: Flight;
  toFlight: Flight;

  constructor(private router: Router,
              public dataservice: DatasharingService) {
      this.forFlight = {
        initial: this.myHead,
        departingTime: "",
        returningTime: "",
        plane:"",
        gate:"",
        seats:0,
        duration:"0h",
        price:0
      };
    
      this.toFlight = {
        initial: this.myHead,
        departingTime: "",
        returningTime: "",
        plane:"",
        gate:"",
        seats:0,
        duration:"0h",
        price:0
      };

      this.pass = {
        departingFlight: this.forFlight,
        returningFlight: this.toFlight,
        travelers: null
      };

  }

  ngOnInit() {
    this.myHead = this.dataservice.getHeadFlightHeader();
    this.travelers = this.dataservice.getTravelers();
    this.forFlight.initial = this.myHead;
    this.toFlight.initial = this.myHead;

  }

  goTravel(){
    this.router.navigate(['traveler']);
  }

  updateDeparture(flight){
    this.forFlight = {
      initial: this.myHead,
      departingTime: flight.departingTime,
      returningTime: flight.returningTime,
      plane: flight.plane,
      gate: flight.gate,
      seats: flight.seats,
      duration: flight.duration,
      price: flight.price
    };
    console.log(this.forFlight);

  }
  
  updateReturn(flight){
    this.toFlight = {
      initial: this.myHead,
      departingTime: flight.departingTime,
      returningTime: flight.returningTime,
      plane: flight.plane,
      gate: flight.gate,
      seats: flight.seats,
      duration: flight.duration,
      price: flight.price
    };
    console.log(this.toFlight);
    console.log(this.pass);
  }

  onSubmit(){
    this.pass.departingFlight = this.forFlight;
    this.pass.returningFlight = this.toFlight;
    this.pass.travelers = this.travelers;
    
    this.dataservice.setPassFlight(this.pass);
    console.log(this.pass);
    this.router.navigate(['traveler']);
  }

}
