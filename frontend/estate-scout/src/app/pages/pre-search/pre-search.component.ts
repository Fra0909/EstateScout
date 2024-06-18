import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyType} from "../../enums/property-type";
import {Subscription} from "rxjs";
import {MinMaxFieldMenuComponent} from "../../search-fields/min-max-field-menu/min-max-field-menu-component";
import {DropdownFieldMenuType} from "../../enums/dropdown-field-menu-type";
import {BEDROOM_OPTIONS, RADIUS_OPTIONS, RENT_PRICE_OPTIONS, SALE_PRICE_OPTIONS} from "../../price-options";
import {DropdownFieldComponent} from "../../search-fields/dropdown-field/dropdown-field.component";
import {DropdownValue} from "../../models/dropdown-value";
import {PropertySearchFilter} from "../../models/property-search-filter";
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {CtaButtonComponent} from "../../cta-button/cta-button.component";
import {NgClass} from "@angular/common";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-pre-search',
  standalone: true,
  imports: [
    MinMaxFieldMenuComponent,
    DropdownFieldComponent,
    LocationAutoCompleteFieldComponent,
    CtaButtonComponent,
    NgClass
  ],
  templateUrl: './pre-search.component.html',
  styleUrl: './pre-search.component.css'
})
export class PreSearchComponent implements OnInit {
  propertyType?: PropertyType;
  routeSubscription?: Subscription;
  minBedVariations: DropdownValue[] = [{ value: 0, viewValue: "No min" }].concat(BEDROOM_OPTIONS);
  initialPropertyFilter: PropertySearchFilter = { radius: 0.1 };
  showLocationFieldEmptyWarning: boolean = false;
  maxForSalePriceVariations: DropdownValue[] = [{ value: 0, viewValue: "No max" }].concat(SALE_PRICE_OPTIONS);
  maxForRentPriceVariations: DropdownValue[] = [{ value: 0, viewValue: "No max" }].concat(RENT_PRICE_OPTIONS);
  protected readonly PropertyType = PropertyType;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.propertyType = params['propertyType'] === PropertyType.forRent ? PropertyType.forRent : PropertyType.forSale;
    });
  }

  locationAutoCompleteChanged(place: PlaceSuggestion) {
    if (place.data.bbox) {
      // bbox = left,bottom,right,top
      this.initialPropertyFilter.minLongitude = place.data.bbox[0];
      this.initialPropertyFilter.minLatitude = place.data.bbox[1];
      this.initialPropertyFilter.maxLongitude = place.data.bbox[2];
      this.initialPropertyFilter.maxLatitude = place.data.bbox[3];
      this.initialPropertyFilter.shortAddress = place.shortAddress;
    }
  }

  showLocationFieldEmptyWarningChanged (status: boolean) {
    this.showLocationFieldEmptyWarning = status;
  }

  minBedDropdownChanged(matSelectChange: MatSelectChange) {
    this.initialPropertyFilter.minBeds = matSelectChange.value;
  }

  maxPriceDropdownChanged(matSelectChange: MatSelectChange) {
    this.initialPropertyFilter.maxPrice = matSelectChange.value;
  }
}
