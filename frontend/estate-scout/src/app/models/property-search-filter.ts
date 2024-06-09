export interface PropertySearchFilter {
  radius: number;
  minBeds: number;
  maxBeds: number;
  minPrice: number;
  maxPrice: number;
  minLatitude?: number;
  maxLatitude?: number;
  minLongitude?: number;
  maxLongitude?: number;
  [key: string]: string | number | undefined;
}
