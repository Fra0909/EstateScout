import { Component } from '@angular/core';
import {CtaButtonComponent} from "../cta-button/cta-button.component";
import {
  LocationAutoCompleteFieldComponent, PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CtaButtonComponent,
    LocationAutoCompleteFieldComponent
  ],
  templateUrl: './basic-search-box.component.html',
  styleUrl: './basic-search-box.component.css'
})
export class BasicSearchBoxComponent {
  selectedLocationPostcode = "";

  locationAutoCompleteChanged(value: PlaceSuggestion) {
    this.selectedLocationPostcode = value.data.postcode;
  }

}
