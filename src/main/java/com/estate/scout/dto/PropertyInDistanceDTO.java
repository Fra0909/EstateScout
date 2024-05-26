package com.estate.scout.dto;

public class PropertyInDistanceDTO {

  double latitude;
  double longitude;
  int distanceInMiles;

  public PropertyInDistanceDTO(double latitude, double longitude, int distanceInMiles) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.distanceInMiles = distanceInMiles;
  }

  public double getLatitude() {
    return latitude;
  }

  public void setLatitude(double latitude) {
    this.latitude = latitude;
  }

  public double getLongitude() {
    return longitude;
  }

  public void setLongitude(double longitude) {
    this.longitude = longitude;
  }

  public int getDistanceInMiles() {
    return distanceInMiles;
  }

  public void setDistanceInMiles(int distanceInMiles) {
    this.distanceInMiles = distanceInMiles;
  }

  @Override
  public String toString() {
    return "PropertyInDistanceDTO{" +
        "latitude=" + latitude +
        ", longitude=" + longitude +
        ", distanceInMiles=" + distanceInMiles +
        '}';
  }
}
