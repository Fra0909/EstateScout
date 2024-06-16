import {PropertyType} from "../enums/property-type";

export interface PropertySearchFilter {
  shortAddress?: string;
  radius?: number;
  minBeds?: number;
  maxBeds?: number;
  minPrice?: number;
  maxPrice?: number;
  minLatitude?: number;
  maxLatitude?: number;
  minLongitude?: number;
  maxLongitude?: number;
  propertyType?: PropertyType;
  page?: number;
  pageSize?: number;
  [key: string]: string | number | undefined;
}
