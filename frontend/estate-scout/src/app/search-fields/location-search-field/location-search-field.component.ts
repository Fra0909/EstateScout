import {Component, Input} from '@angular/core';
import {
  LocationAutoCompleteComponent,
  PlaceSuggestion
} from "../../location-auto-complete/location-auto-complete.component";

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    LocationAutoCompleteComponent
  ],
  templateUrl: './location-search-field.component.html',
  styleUrl: './location-search-field.component.css'
})
export class LocationSearchFieldComponent {
  @Input() fieldName!: string;
  currentLocation = "";

  locationAutoCompleteChanged(value: PlaceSuggestion) {
    this.currentLocation = value.shortAddress;
  }

}
