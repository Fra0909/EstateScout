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

export class PropertySearchResultsComponent implements OnInit, OnDestroy {
  @Input() propertySearchResults: Property[] = [];
  subscription: Subscription | undefined;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.subscription = this.propertyService.getAllProperties().subscribe(property => {
     this.propertySearchResults.push(...property);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
