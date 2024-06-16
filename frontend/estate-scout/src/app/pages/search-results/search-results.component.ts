import {Component, Input, OnInit} from '@angular/core';
import {AdvancedSearchBoxComponent} from "../../advanced-search-box/advanced-search-box.component";
import {PropertySearchResultsComponent} from "../../property-search-results/property-search-results.component";
import {Property} from "../../models/property";
import {ActivatedRoute} from "@angular/router";
import {PropertySearchFilter} from "../../models/property-search-filter";
import {PropertySearchResults} from "../../models/property-search-results";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    AdvancedSearchBoxComponent,
    PropertySearchResultsComponent
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  propertySearchResults!: PropertySearchResults;
  initialPropertyFilter: PropertySearchFilter = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(searchFilter => {
      this.initialPropertyFilter.minLongitude = searchFilter["minLongitude"];
      this.initialPropertyFilter.minLatitude = searchFilter["minLatitude"];
      this.initialPropertyFilter.maxLongitude = searchFilter["maxLongitude"];
      this.initialPropertyFilter.maxLatitude = searchFilter["maxLatitude"];
      this.initialPropertyFilter.radius = searchFilter["radius"];
      this.initialPropertyFilter.propertyType = searchFilter["propertyType"]
      this.initialPropertyFilter.shortAddress = searchFilter["shortAddress"];
    })
  }

  propertySearchResultsChanged(propertyResults: PropertySearchResults) {
    this.propertySearchResults = propertyResults;
  }
}
