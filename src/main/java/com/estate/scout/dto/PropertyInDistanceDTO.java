package com.estate.scout.dto;

public class PropertyInDistanceDTO {

  long latitude;
  long longitude;
  int distanceInKilometres;

  public PropertyInDistanceDTO(long latitude, long longitude, int distanceInKilometres) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.distanceInKilometres = distanceInKilometres;
  }

  public long getLatitude() {
    return latitude;
  }

  public void setLatitude(long latitude) {
    this.latitude = latitude;
  }

  public long getLongitude() {
    return longitude;
  }

  public void setLongitude(long longitude) {
    this.longitude = longitude;
  }

  public int getDistanceInKilometres() {
    return distanceInKilometres;
  }

  public void setDistanceInKilometres(int distanceInKilometres) {
    this.distanceInKilometres = distanceInKilometres;
  }
}
