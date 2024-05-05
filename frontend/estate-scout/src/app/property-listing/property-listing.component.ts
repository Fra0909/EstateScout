import {Component, Input} from '@angular/core';
import {Property} from "../models/property";
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-property-listing',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    CurrencyPipe
  ],
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.css'
})
export class PropertyListingComponent {
  @Input() propertyListing!: Property;
}
