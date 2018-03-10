import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DatasharingService } from '../datasharing.service';
import { PassFlight } from '../shared/models/passflight.model';
import { Traveler } from '../shared/models/traveler.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // @ViewChild('forCredit') credit: ElementRef;
  // isCredit: boolean = true;
  // isPaypal: boolean;
  payOption: boolean = true;
  pass: PassFlight;
  dataSource: Traveler[];
  panelOpenState: boolean = false;

  constructor(private dataService: DatasharingService) {
   }

  ngOnInit() {
    this.pass = this.dataService.getPassFlight();
    this.dataSource = this.dataService.getPassFlight().travelers;
  }

  checkMethod(){
    if(this.payOption){
      this.payOption = !this.payOption;
    }
    
  }

}
