import {Component, OnInit} from '@angular/core';
import {PropertyListingComponent} from "../property-listing/property-listing.component";
import {Property} from "../models/property";
import {PropertyService} from "../services/property.service";
import {NgForOf} from "@angular/common";

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

export class PropertySearchResultsComponent implements OnInit {
  propertySearchResults: Property[] = [];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe(property => {
     this.propertySearchResults.push(...property);
    });
  }

}
