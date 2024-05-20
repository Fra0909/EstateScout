import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Property } from "../models/property";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseURL: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProperty(id: number) : Observable<Property> {
    return this.http.get<Property>(`${this.baseURL}/api/properties/${id}`);
  }

}
