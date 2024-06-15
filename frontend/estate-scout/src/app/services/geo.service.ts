import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {FeatureCollection} from "geojson";

@Injectable({
  providedIn: 'root'
})

export class GeoService {
private apiKey = "e26445111d42404a8a9b3694835f179c";
  constructor(private http: HttpClient) {}

  getPlaceSuggestions(text: string): Observable<FeatureCollection> {
    const params = new HttpParams()
      .set('text', text)
      .set('filter', 'countrycode:gb')
      .set('limit', '10')
      .set('apiKey', this.apiKey);

    const url = 'https://api.geoapify.com/v1/geocode/autocomplete';

    return this.http.get<FeatureCollection>(url, { params });
  }
}
