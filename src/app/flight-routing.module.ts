import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlightsComponent } from "./flights/flights.component";
import { FlightFinderComponent } from "./flight-finder/flight-finder.component";
import { TravelerComponent } from "./traveler/traveler.component";
import { PaymentComponent } from "./payment/payment.component";

const flightRoutes: Routes = [
  {path: 'payment' , component: PaymentComponent},
  {path: 'traveler' , component: TravelerComponent},
  {path: 'flight-finder' , component: FlightFinderComponent},
  {path: 'flights' , component: FlightsComponent},
  {path: '' , redirectTo: 'flight-finder', pathMatch: 'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(flightRoutes)],
  exports:[RouterModule]
})
export class FlightRouteModule{}