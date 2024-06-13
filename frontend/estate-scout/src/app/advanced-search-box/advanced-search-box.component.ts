import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {DropdownFieldComponent} from "../search-fields/dropdown-field/dropdown-field.component";
import {DropdownValue} from "../models/dropdown-value";
import {NgClass} from "@angular/common";
import {
  MinMaxFieldMenuComponent
} from "../search-fields/min-max-field-menu/min-max-field-menu-component";
import {CurrencyService} from "../services/currency.service";
import {DropdownFieldMenuType} from "../enums/dropdown-field-menu-type";
import {PropertySearchFilter} from "../models/property-search-filter";
import {MatSelectChange} from "@angular/material/select";
import {PropertyService} from "../services/property.service";
import {Property} from "../models/property";
import {PropertyType} from "../enums/property-type";
import {
  BEDROOM_OPTIONS,
  RADIUS_OPTIONS,
  RENT_PRICE_OPTIONS,
  SALE_PRICE_OPTIONS
} from "../price-options";

@Component({
  selector: 'app-advanced-search-box',
  standalone: true,
  imports: [
    LocationAutoCompleteFieldComponent,
    DropdownFieldComponent,
    NgClass,
    MinMaxFieldMenuComponent
  ],
  templateUrl: './advanced-search-box.component.html',
  styleUrl: './advanced-search-box.component.css'
})

export class AdvancedSearchBoxComponent implements OnInit {
  protected readonly DropdownFieldMenuType = DropdownFieldMenuType;

  @Input() propertySearchFilter: PropertySearchFilter = {
    minBeds: 0,
    maxBeds: 0,
    minPrice: 0,
    maxPrice: 0,
    radius: 0.1
  };

  radiusVariations: DropdownValue[] = RADIUS_OPTIONS;

  NO_MIN_OPTION: DropdownValue = {value: 0, viewValue: "No min"};
  NO_MAX_OPTION: DropdownValue = {value: 0, viewValue: "No max"};

  minBedVariations: DropdownValue[] = [this.NO_MIN_OPTION].concat(BEDROOM_OPTIONS);
  maxBedVariations: DropdownValue[] = [this.NO_MAX_OPTION].concat(BEDROOM_OPTIONS);

  minForSalePriceVariations: DropdownValue[] = [this.NO_MIN_OPTION].concat(SALE_PRICE_OPTIONS);
  maxForSalePriceVariations: DropdownValue[] = [this.NO_MAX_OPTION].concat(SALE_PRICE_OPTIONS);

  minForRentPriceVariations: DropdownValue[] = [this.NO_MIN_OPTION].concat(RENT_PRICE_OPTIONS);
  maxForRentPriceVariations: DropdownValue[] = [this.NO_MAX_OPTION].concat(RENT_PRICE_OPTIONS);

  @Output() propertySearchResults: EventEmitter<Property[]> = new EventEmitter<Property[]>();

  constructor(private currencyService: CurrencyService, private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.onFilterChanged();
  }

  onLocationAutoCompleteChanged(place: PlaceSuggestion) {
    if (place.data.bbox) {
      // bbox = left,bottom,right,top
      this.propertySearchFilter.minLongitude = place.data.bbox[0];
      this.propertySearchFilter.minLatitude = place.data.bbox[1];
      this.propertySearchFilter.maxLongitude = place.data.bbox[2];
      this.propertySearchFilter.maxLatitude = place.data.bbox[3];
    }
    this.onFilterChanged();
  }

  onRadiusSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.radius = event.value;
    this.onFilterChanged();
  }

  onMinBedsSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.minBeds = event.value;
    if (!!this.propertySearchFilter.minBeds > !!this.propertySearchFilter.maxBeds) {
      this.propertySearchFilter.maxBeds = this.propertySearchFilter.minBeds;
    }
    this.onFilterChanged();
  }

  onMaxBedsSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.maxBeds = event.value;
    this.onFilterChanged();
  }

  onMinPriceSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.minPrice = event.value;
    if (!!this.propertySearchFilter.minPrice > !!this.propertySearchFilter.maxPrice) {
      this.propertySearchFilter.maxPrice = this.propertySearchFilter.minPrice;
    }
    this.onFilterChanged();
  }

  onMaxPriceSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.maxPrice = event.value;
    this.onFilterChanged();
  }

  onFilterChanged() {
    this.propertyService.getPropertiesByFilter(this.propertySearchFilter).subscribe(properties => {
      this.propertySearchResults.emit(properties);
    });
  }

  protected readonly PropertyType = PropertyType;
}

