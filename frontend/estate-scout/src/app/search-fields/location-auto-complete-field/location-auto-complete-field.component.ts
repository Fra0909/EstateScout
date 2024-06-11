import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {catchError, of, Subject, Subscription} from "rxjs";
import {GeoService} from "../../services/geo.service";
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-location-auto-complete-field',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatAutocomplete,
    AsyncPipe,
    MatOption,
    NgForOf,
    MatAutocompleteTrigger,
    NgClass,
    NgIf
  ],
  templateUrl: './location-auto-complete-field.component.html',
  styleUrl: './location-auto-complete-field.component.css'
})
export class LocationAutoCompleteFieldComponent implements OnDestroy, OnInit {
  @Output() locationChange: EventEmitter<PlaceSuggestion> = new EventEmitter<PlaceSuggestion>();
  @Input() initialText: string | undefined;

  searchOptions: Subject<PlaceSuggestion[]> = new Subject<PlaceSuggestion[]>();
  inputFieldFormControl: FormControl = new FormControl();
  private valueChangesSub: Subscription = new Subscription();
  private chosenOption: PlaceSuggestion | undefined;
  private userInputTimeout: number | undefined;
  private requestSub: Subscription | undefined;
  private MIN_LETTERS_FOR_SEARCH = 3;

  @Input() showLocationFieldEmptyWarning: boolean = false;

  constructor(private geoService: GeoService) {
  }

  ngOnInit() {
    this.inputFieldFormControl.setValue(this.initialText || '');

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
    });
  }

  ngOnDestroy() {
    this.valueChangesSub.unsubscribe();
  }

  private generateSuggestions(text: string) {
    if (this.requestSub) {
      this.requestSub.unsubscribe();
    }

    if (text.length >= this.MIN_LETTERS_FOR_SEARCH){
      this.requestSub = this.geoService.getPlaceSuggestions(text).pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      ).subscribe({
        next: (data) => {
          const uniqueShortAddresses = new Set<string>()

          if (data) {
            const placeSuggestions = data.features.map(feature => {
              const property = feature.properties as GeocodingFeatureProperty;
              property.bbox = feature.bbox;
              return {
                shortAddress: this.generateShortAddress(property),
                data: property
              };
            }).filter(suggestion => {
              const isDuplicate = uniqueShortAddresses.has(suggestion.shortAddress);
              uniqueShortAddresses.add(suggestion.shortAddress);
              return !isDuplicate;
            }).filter(suggestion => {
              return suggestion.data.county && suggestion.data.city;
            });
            this.searchOptions.next(placeSuggestions);
          }
        }
      })
    }
  }

  private generateShortAddress(property: GeocodingFeatureProperty): string {
    return property.city + ", " + property.county;
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
  data: GeocodingFeatureProperty;
}

interface GeocodingFeatureProperty {
  city: string;
  county: string;
  bbox?: number[];
}
