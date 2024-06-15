import { ResolveFn } from '@angular/router';
import {Observable} from "rxjs";
import {Property} from "../models/property";
import {PropertyService} from "../services/property.service";
import {inject} from "@angular/core";

export const propertyResolver: ResolveFn<Observable<Property>> = (
  route,
  state,
  propertyService: PropertyService = inject(PropertyService)) => {
    const propertyId = route.queryParams["propertyId"];
    return propertyService.getProperty(propertyId);
};
