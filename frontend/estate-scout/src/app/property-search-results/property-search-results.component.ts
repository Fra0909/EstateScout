import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PropertyListingComponent} from "../property-listing/property-listing.component";
import {Property} from "../models/property";
import {PropertyService} from "../services/property.service";
import {NgForOf} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-property-search-results',
  standalone: true,
  imports: [
    PropertyListingComponent,
    NgForOf
  ],
  templateUrl: './property-search-results.component.html',
  styleUrl: './property-search-results.component.css'
})

export class PropertySearchResultsComponent {
  @Input() propertySearchResults: Property[] = [];

}
