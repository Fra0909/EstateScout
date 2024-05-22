package com.estate.scout.dto;

public class PropertyInDistanceDTO {

  double latitude;
  double longitude;
  int distanceInKilometres;

  public PropertyInDistanceDTO(double latitude, double longitude, int distanceInKilometres) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.distanceInKilometres = distanceInKilometres;
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

  public int getDistanceInKilometres() {
    return distanceInKilometres;
  }

  public void setDistanceInKilometres(int distanceInKilometres) {
    this.distanceInKilometres = distanceInKilometres;
  }

  @Override
  public String toString() {
    return "PropertyInDistanceDTO{" +
        "latitude=" + latitude +
        ", longitude=" + longitude +
        ", distanceInKilometres=" + distanceInKilometres +
        '}';
  }
}
