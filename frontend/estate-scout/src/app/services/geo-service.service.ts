import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FeatureCollection} from "geojson";

@Injectable({
  providedIn: 'root'
})

export class GeoService {
private apiKey = "e26445111d42404a8a9b3694835f179c";
  constructor(private http: HttpClient) {}

  getPlaceSuggestions(text: string): Observable<FeatureCollection> {
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&filter=countrycode:gb&limit=5&apiKey=${this.apiKey}`;
    return this.http.get<FeatureCollection>(url);
  }
}
