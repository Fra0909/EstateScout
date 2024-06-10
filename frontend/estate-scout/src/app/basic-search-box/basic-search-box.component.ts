import { Component } from '@angular/core';
import {CtaButtonComponent} from "../cta-button/cta-button.component";
import {
  LocationAutoCompleteFieldComponent, PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {PropertySearchFilter} from "../models/property-search-filter";
import {PropertyType} from "../enums/property-type";

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
  protected readonly PropertyType = PropertyType;
  initialPropertyFilter: PropertySearchFilter = {radius: 0.1};
  constructor() {}

  locationAutoCompleteChanged(place: PlaceSuggestion) {
    if (place.data.bbox) {
      // bbox = left,bottom,right,top
      this.initialPropertyFilter.minLongitude = place.data.bbox[0];
      this.initialPropertyFilter.minLatitude = place.data.bbox[1];
      this.initialPropertyFilter.maxLongitude = place.data.bbox[2];
      this.initialPropertyFilter.maxLatitude = place.data.bbox[3];
    }
  }
}
