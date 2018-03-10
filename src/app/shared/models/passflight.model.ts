import { Flight } from "./flight.model";
import { Traveler } from "./traveler.model";

export class PassFlight{
  departingFlight: Flight;
  returningFlight: Flight;
  travelers: Traveler[];
}