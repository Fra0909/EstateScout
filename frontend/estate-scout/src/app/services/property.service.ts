import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Property } from "../models/property";
import { Observable } from "rxjs";
import {PropertySearchFilter} from "../models/property-search-filter";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseURL: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProperty(id: number) : Observable<Property> {
    return this.http.get<Property>(`${this.baseURL}/api/property/${id}`);
  }

  getAllProperties() : Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseURL}/api/property`);
  }

  getFeaturedProperties() : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.baseURL}/api/property/filter?page=0&pageSize=3`);
  }

  getPropertiesByFilter(searchFilter: PropertySearchFilter) : Observable<Property[]> {
    let params = new HttpParams()

    Object.keys(searchFilter).forEach(key => {
      const value = searchFilter[key];
      if (value) {
        params = params.set(key, String(value))
      }
    });

    return this.http.get<Property[]>(`${this.baseURL}/api/property/filter`, { params });
  }
}
