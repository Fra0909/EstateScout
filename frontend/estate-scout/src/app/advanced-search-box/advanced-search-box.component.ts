import {Component, Input, OnInit} from '@angular/core';
import {
  LocationAutoCompleteFieldComponent,
  PlaceSuggestion
} from "../search-fields/location-auto-complete-field/location-auto-complete-field.component";
import {DropdownFieldComponent} from "../search-fields/dropdown-field/dropdown-field.component";
import {DropdownValue} from "../models/dropdown-value";
import {NgClass} from "@angular/common";
import {FieldMenuComponent} from "../search-fields/field-menu/field-menu.component";
import {CurrencyService} from "../services/currency.service";

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
  radiusVariations: DropdownValue[] = [];

  minBedVariations: DropdownValue[] = [];
  maxBedVariations: DropdownValue[] = [];

  minForSalePriceVariations: DropdownValue[] = [];
  maxForSalePriceVariations: DropdownValue[] = [];

  forRentPriceValues: number[] = [];
  forRentPriceVariations: DropdownValue[] = [];

  locationAutoCompleteChanged(value: PlaceSuggestion) {
    this.selectedLocationPostcode = value.data.postcode;
  }

  constructor(private currencyService: CurrencyService) {
    this.radiusVariations = this.radiusValues.map(value => ({
      value, viewValue: !!value ? `Within ${value} mile${value != 1 ? "s" : ""}` : "This area only"
    }));

    this.initForSalePriceVariations();
    this.initForRentPriceVariations();
    this.initMinMaxBedVariations();
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

}
