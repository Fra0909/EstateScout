import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseURL: string = "http://localhost:4200";

  constructor(private http: HttpClient) { }

  getProperty(id: number) {
    return this.http.get(`${this.baseURL}api/properties/${id}`);
  }

}
