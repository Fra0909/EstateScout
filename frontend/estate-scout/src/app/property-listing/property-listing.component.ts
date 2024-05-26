import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Property} from "../models/property";

@Component({
  selector: 'app-property-listing',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    CurrencyPipe,
    MatIconModule,
    HttpClientModule
  ],
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.css',
  providers: [
    HttpClientModule
  ]
})
export class PropertyListingComponent {
  @Input() propertyListing!: Property;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("bed", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/bed.svg"));
    this.matIconRegistry.addSvgIcon("bath", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/bath.svg"));
    this.matIconRegistry.addSvgIcon("couch", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/couch.svg"));
  }

  formatPropertyType(propertyType: string) : string {
    return propertyType == "FOR_SALE" ? "For Sale" : "To Rent";
  }
}
