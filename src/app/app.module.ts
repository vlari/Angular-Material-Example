import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/models/custommaterial';
import { FlightFinderComponent } from './flight-finder/flight-finder.component';
import { FlightsComponent } from './flights/flights.component';
import { TravelerComponent } from './traveler/traveler.component';
import { PaymentComponent } from './payment/payment.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlightRouteModule } from './flight-routing.module';
import { DatasharingService } from './datasharing.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightFinderComponent,
    FlightsComponent,
    TravelerComponent,
    PaymentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CustomMaterialModule,
    AngularFontAwesomeModule,
    FormsModule,
    FlightRouteModule
  ],
  providers: [DatasharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
