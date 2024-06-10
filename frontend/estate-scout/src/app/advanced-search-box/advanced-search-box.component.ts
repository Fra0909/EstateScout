import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {DropdownFieldComponent} from "../search-fields/dropdown-field/dropdown-field.component";
import {DropdownValue} from "../models/dropdown-value";
import {NgClass} from "@angular/common";
import {MinMaxFieldMenuComponent} from "../search-fields/min-max-field-menu/min-max-field-menu-component";
import {CurrencyService} from "../services/currency.service";
import {DropdownFieldMenuType} from "../enums/dropdown-field-menu-type";
import {PropertySearchFilter} from "../models/property-search-filter";
import {MatSelectChange} from "@angular/material/select";
import {PropertyService} from "../services/property.service";
import {Property} from "../models/property";
import {Observable} from "rxjs";

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

  @Input() propertySearchFilter: PropertySearchFilter = { minBeds: 0, maxBeds: 0, minPrice: 0, maxPrice: 0, radius: 0.1 };

  radiusValues: number[] = [0.1, 0.5, 1, 3, 5, 10, 15, 20, 25, 30];
  radiusVariations: DropdownValue[] = [];

  minBedVariations: DropdownValue[] = [];
  maxBedVariations: DropdownValue[] = [];

  minForSalePriceVariations: DropdownValue[] = [];
  maxForSalePriceVariations: DropdownValue[] = [];

  forRentPriceValues: number[] = [];
  forRentPriceVariations: DropdownValue[] = [];

  @Output() propertySearchResults: EventEmitter<Property[]> = new EventEmitter<Property[]>();



  constructor(private currencyService: CurrencyService, private propertyService: PropertyService) {
    this.initRadiusVariations();
    this.initForSalePriceVariations();
    this.initForRentPriceVariations();
    this.initMinMaxBedVariations();
  }

  ngOnInit() {
    console.log(this.propertySearchResults);
    this.sendPropertySearchResultsToParent();
  }

  private initRadiusVariations() {
    this.radiusVariations = this.radiusValues.map(value => ({
      value, viewValue: value > 0.1 ? `Within ${value} mile${value != 1 ? "s" : ""}` : "This area only"
    }));
  }

  private initForRentPriceVariations() {
    let forRentValue: number = 0;
    this.forRentPriceVariations.push({value: 0, viewValue: "No minimum"});

    while (forRentValue < 25000) {
      if (forRentValue < 1000) {
        this.forRentPriceValues.push(forRentValue);
        forRentValue += 50;
      } else if (forRentValue < 15000) {
        this.forRentPriceValues.push(250);
        forRentValue += 250;
      } else {
        this.forRentPriceValues.push(2500);
        forRentValue += 2500;
      }
    }
  }

  private initForSalePriceVariations() {
    let forSaleValue: number = 0;
    this.minForSalePriceVariations.push({value: 0, viewValue: "No min"});
    this.maxForSalePriceVariations.push({value: 0, viewValue: "No max"});

    while (forSaleValue < 10000000) {
      if (forSaleValue < 250000){
        forSaleValue += 10000;
      }
      else if (forSaleValue < 500000) {
        forSaleValue += 25000;
      }
      else {
        forSaleValue += 100000;
      }

      this.minForSalePriceVariations.push(
        {value: forSaleValue, viewValue: this.currencyService.convertNumberToGBP(forSaleValue)});

      this.maxForSalePriceVariations.push(
        {value: forSaleValue, viewValue: this.currencyService.convertNumberToGBP(forSaleValue)});
    }
  }

  private initMinMaxBedVariations() {
    this.minBedVariations.push({value: 0, viewValue: "No min"});
    this.maxBedVariations.push({value: 0, viewValue: "No max"})

    for (let i: number = 1; i <= 6; i++) {
      this.minBedVariations.push({value: i, viewValue: `${i === 6 ? "6+" : i}`})
      this.maxBedVariations.push({value: i, viewValue: `${i === 6 ? "6+" : i}`});
    }
  }

  locationAutoCompleteChanged(place: PlaceSuggestion) {
    if (place.data.bbox) {
      // bbox = left,bottom,right,top
      this.propertySearchFilter.minLongitude = place.data.bbox[0];
      this.propertySearchFilter.minLatitude = place.data.bbox[1];
      this.propertySearchFilter.maxLongitude = place.data.bbox[2];
      this.propertySearchFilter.maxLatitude = place.data.bbox[3];
    }
    this.sendPropertySearchResultsToParent();
  }

  radiusSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.radius = event.value;
    this.sendPropertySearchResultsToParent();
  }

  minBedsSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.minBeds = event.value;
    if (!!this.propertySearchFilter.minBeds > !!this.propertySearchFilter.maxBeds) {
      this.propertySearchFilter.maxBeds = this.propertySearchFilter.minBeds;
    }
    this.sendPropertySearchResultsToParent();
  }

  maxBedsSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.maxBeds = event.value;
    this.sendPropertySearchResultsToParent();
  }

  minPriceSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.minPrice = event.value;
    if (!!this.propertySearchFilter.minPrice > !!this.propertySearchFilter.maxPrice) {
      this.propertySearchFilter.maxPrice = this.propertySearchFilter.minPrice;
    }
    this.sendPropertySearchResultsToParent();
  }

  maxPriceSelectionChanged(event: MatSelectChange) {
    this.propertySearchFilter.maxPrice = event.value;
    this.sendPropertySearchResultsToParent();
  }

  sendPropertySearchResultsToParent() {
    this.propertyService.getPropertiesByFilter(this.propertySearchFilter).subscribe(properties => {
      this.propertySearchResults.emit(properties);
    });
  }
}
