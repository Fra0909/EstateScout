import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {AsyncPipe, NgForOf} from "@angular/common";
import {catchError, of, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GeoJSON} from "geojson";
import {GeoService} from "../services/geo-service.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-location-auto-complete',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatAutocomplete,
    AsyncPipe,
    MatOption,
    NgForOf,
    MatAutocompleteTrigger
  ],
  templateUrl: './location-auto-complete.component.html',
  styleUrl: './location-auto-complete.component.css'
})
export class LocationAutoCompleteComponent implements OnDestroy {
  @Output() locationChange: EventEmitter<PlaceSuggestion> = new EventEmitter<PlaceSuggestion>();

  searchOptions: Subject<PlaceSuggestion[]> = new Subject<PlaceSuggestion[]>();
  inputFieldFormControl: FormControl = new FormControl();
  private valueChangesSub: Subscription;
  private chosenOption: PlaceSuggestion | undefined;
  private userInputTimeout: number | undefined;
  private requestSub: Subscription | undefined;

  constructor(private geoService: GeoService) {
    this.valueChangesSub = this.inputFieldFormControl.valueChanges.subscribe((value) => {
      if (this.userInputTimeout) {
        window.clearTimeout(this.userInputTimeout);
      }

      if (this.chosenOption && this.chosenOption.shortAddress === value) {
        this.searchOptions.next([]);
        return;
      }

      if (!value || value.length < 3) {
        this.searchOptions.next([]);
      }

      this.userInputTimeout = window.setTimeout(() => {
        this.generateSuggestions(value);
      }, 300)
    })
  }
  ngOnDestroy() {
    this.valueChangesSub.unsubscribe();
  }

  private generateSuggestions(text: string) {
    if (this.requestSub) {
      this.requestSub.unsubscribe();
    }

    this.requestSub = this.geoService.getPlaceSuggestions(text).pipe(
      catchError(error => {
        console.error(error);
        return of(null);
      })
    ).subscribe({
      next: (data) => {
        if (data) {
          const placeSuggestions = data.features.map(feature => {
            const properties: GeocodingFeatureProperties = feature.properties as GeocodingFeatureProperties;

            return {
              shortAddress: this.generateShortAddress(properties),
              data: properties
            };
          });

          this.searchOptions.next(placeSuggestions.length ? placeSuggestions : []);
        } else {
          this.searchOptions.next([]);
        }
      }
    })
  }

  private generateShortAddress(properties: GeocodingFeatureProperties): string {
    return properties.city + ", " + properties.county;
  }

  public optionSelectionChange(option: PlaceSuggestion, event: MatOptionSelectionChange) {
    if (event.isUserInput) {
      this.chosenOption = option;
      this.locationChange.emit(option);
    }
  }

}

export interface PlaceSuggestion {
  shortAddress: string;
  data: GeocodingFeatureProperties;
}

interface GeocodingFeatureProperties {
  city: string;
  county: string;
  postcode: string;
  country: string;
  lon: number;
  lat: number;
}
