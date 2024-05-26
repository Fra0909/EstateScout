import { Component } from '@angular/core';
import {LocationSearchFieldComponent} from "../search-fields/location-search-field/location-search-field.component";

@Component({
  selector: 'app-advanced-search-box',
  standalone: true,
  imports: [
    LocationSearchFieldComponent
  ],
  templateUrl: './advanced-search-box.component.html',
  styleUrl: './advanced-search-box.component.css'
})
export class AdvancedSearchBoxComponent {

}
