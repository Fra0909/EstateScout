import {Component, Input} from '@angular/core';
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {DropdownFieldComponent} from "../search-fields/dropdown-field/dropdown-field.component";
import {DropdownValue} from "../models/dropdown-value";
import {NgClass} from "@angular/common";
import {FieldMenuComponent} from "../search-fields/field-menu/field-menu.component";

@Component({
  selector: 'app-advanced-search-box',
  standalone: true,
  imports: [
    LocationAutoCompleteFieldComponent,
    DropdownFieldComponent,
    NgClass,
    FieldMenuComponent
  ],
  templateUrl: './advanced-search-box.component.html',
  styleUrl: './advanced-search-box.component.css'
})

export class AdvancedSearchBoxComponent {
  selectedLocationPostcode: string = "";

  radiusValues: number[] = [0, 0.5, 1, 3, 5, 10, 15, 20, 25, 30];
  radiusVariations: DropdownValue[] = this.radiusValues.map(value => ({
    value, viewValue: value === 0 ? "This area only" : `Within ${value} mile${value != 1 ? "s" : ""}`
  }));

  minimumBedValues: number[] = [0, 1, 2, 3];
  minimumBedVariations: DropdownValue[] = this.minimumBedValues.map(value => ({
    value, viewValue: value === 0 ? "No minimum" : `${value}`
  }));

  maximumBedValues: number[] = [0, 1, 2, 3, 4, 5, 6]
  maximumBedVariations: DropdownValue[] = this.maximumBedValues.map(value => ({
    value, viewValue: value === 0 ? "No maximum" : `${value === 6 ? "6+" : value}`
  }));

  forSalePriceValues: number[] = []
  forSalePriceVariations: DropdownValue[] = this.minimumBedValues.map(value => ({
    value, viewValue: value === 0 ? "No minimum" : `${value}`
  }));

  forRentPriceValues: number[] = []
  forRentPriceVariations: DropdownValue[] = this.forRentPriceValues.map(value => ({
    value, viewValue: value === 0 ? "No minimum" : `${value}`
  }));

  locationAutoCompleteChanged(value: PlaceSuggestion) {
    this.selectedLocationPostcode = value.data.postcode;
  }

  constructor() {
    let forSaleValue: number = 0;
    let forRentValue: number = 0;

    while (forSaleValue <= 1000000) {
      if (forSaleValue <= 250000){
        this.forSalePriceValues.push(forSaleValue);
        forSaleValue += 10000;
      }
      else {
        this.forSalePriceValues.push(forSaleValue);
        forSaleValue += 25000;
      }
    }

    while (forRentValue < 25000) {
      if (forRentValue < 1000) {
        this.forRentPriceValues.push(forRentValue);
        forRentValue += 50;
      }
      else if (forRentValue < 15000) {
        this.forRentPriceValues.push(250);
        forRentValue += 250;
      }
      else {
        this.forRentPriceValues.push(2500);
        forRentValue += 2500;
      }

    }
  }

}
