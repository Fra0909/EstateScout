import {Component, Input} from '@angular/core';
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";

@Component({
  selector: 'app-advanced-search-box',
  standalone: true,
  imports: [
    LocationAutoCompleteFieldComponent
  ],
  templateUrl: './advanced-search-box.component.html',
  styleUrl: './advanced-search-box.component.css'
})
export class AdvancedSearchBoxComponent {
  selectedLocationPostcode = "";

  locationAutoCompleteChanged(value: PlaceSuggestion) {
    this.selectedLocationPostcode = value.data.postcode;
  }

}
