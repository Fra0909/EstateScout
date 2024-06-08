import { Component } from '@angular/core';
import {AdvancedSearchBoxComponent} from "../../advanced-search-box/advanced-search-box.component";
import {PropertySearchResultsComponent} from "../../property-search-results/property-search-results.component";

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
export class SearchResultsComponent {

}
