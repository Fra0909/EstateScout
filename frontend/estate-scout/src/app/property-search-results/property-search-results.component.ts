import {Component, Input} from '@angular/core';
import {PropertyListingComponent} from "../property-listing/property-listing.component";
import {NgForOf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {PropertySearchResults} from "../models/property-search-results";
import {PaginationService} from "../services/pagination.service";

@Component({
  selector: 'app-property-search-results',
  standalone: true,
  imports: [
    PropertyListingComponent,
    NgForOf,
    MatPaginator
  ],
  templateUrl: './property-search-results.component.html',
  styleUrl: './property-search-results.component.css'
})

export class PropertySearchResultsComponent {
  @Input() propertySearchResults?: PropertySearchResults;

  constructor(private paginationService: PaginationService) {}

    pageChanged(pageEvent: PageEvent) {
      this.paginationService.updatePageOptions(pageEvent);
  }

}
