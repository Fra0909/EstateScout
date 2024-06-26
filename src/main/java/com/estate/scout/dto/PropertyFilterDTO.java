package com.estate.scout.dto;

import com.estate.scout.enums.PropertyType;

public class PropertyFilterDTO {

  private String addressLine1;
  private String addressLine2;
  private String addressLine3;
  private String postcode;
  private String town;
  private Integer numberOfBathrooms;
  private Integer minBeds;
  private Integer maxBeds;
  private Integer numberOfLivingRooms;
  private Boolean hasGarden;
  private Boolean hasParking;
  private Boolean petsAllowed;
  private Boolean smokersAllowed;
  private Boolean studentsAllowed;
  private PropertyType propertyType;
  private Integer minPrice;
  private Integer maxPrice;
  private Double minLatitude;
  private Double minLongitude;
  private Double maxLatitude;
  private Double maxLongitude;
  private Integer pageSize;
  private Integer page;
  private Double radius;

  public PropertyFilterDTO(String addressLine1, String addressLine2, String addressLine3, String postcode, String town, Integer numberOfBathrooms, Integer minBeds, Integer maxBeds, Integer numberOfLivingRooms, Boolean hasGarden, Boolean hasParking, Boolean petsAllowed, Boolean smokersAllowed, Boolean studentsAllowed, PropertyType propertyType, Integer minPrice, Integer maxPrice, Double minLatitude, Double minLongitude, Double maxLatitude, Double maxLongitude, Integer pageSize, Integer page, Double radius) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.postcode = postcode;
    this.town = town;
    this.numberOfBathrooms = numberOfBathrooms;
    this.minBeds = minBeds;
    this.maxBeds = maxBeds;
    this.numberOfLivingRooms = numberOfLivingRooms;
    this.hasGarden = hasGarden;
    this.hasParking = hasParking;
    this.petsAllowed = petsAllowed;
    this.smokersAllowed = smokersAllowed;
    this.studentsAllowed = studentsAllowed;
    this.propertyType = propertyType;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.minLatitude = minLatitude;
    this.minLongitude = minLongitude;
    this.maxLatitude = maxLatitude;
    this.maxLongitude = maxLongitude;
    this.pageSize = pageSize;
    this.page = page;
    this.radius = radius;
  }

  public String getAddressLine1() {
    return addressLine1;
  }

  public void setAddressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
  }

  public String getAddressLine2() {
    return addressLine2;
  }

  public void setAddressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
  }

  public String getAddressLine3() {
    return addressLine3;
  }

  public void setAddressLine3(String addressLine3) {
    this.addressLine3 = addressLine3;
  }

  public String getPostcode() {
    return postcode;
  }

  public void setPostcode(String postcode) {
    this.postcode = postcode;
  }

  public String getTown() {
    return town;
  }

  public void setTown(String town) {
    this.town = town;
  }

  public Integer getNumberOfBathrooms() {
    return numberOfBathrooms;
  }

  public void setNumberOfBathrooms(Integer numberOfBathrooms) {
    this.numberOfBathrooms = numberOfBathrooms;
  }

  public Integer getMinBeds() {
    return minBeds;
  }

  public void setMinBeds(Integer minBeds) {
    this.minBeds = minBeds;
  }

  public Integer getMaxBeds() {
    return maxBeds;
  }

  public void setMaxBeds(Integer maxBeds) {
    this.maxBeds = maxBeds;
  }

  public Integer getNumberOfLivingRooms() {
    return numberOfLivingRooms;
  }

  public void setNumberOfLivingRooms(Integer numberOfLivingRooms) {
    this.numberOfLivingRooms = numberOfLivingRooms;
  }

  public Boolean getHasGarden() {
    return hasGarden;
  }

  public void setHasGarden(Boolean hasGarden) {
    this.hasGarden = hasGarden;
  }

  public Boolean getHasParking() {
    return hasParking;
  }

  public void setHasParking(Boolean hasParking) {
    this.hasParking = hasParking;
  }

  public Boolean getPetsAllowed() {
    return petsAllowed;
  }

  public void setPetsAllowed(Boolean petsAllowed) {
    this.petsAllowed = petsAllowed;
  }

  public Boolean getSmokersAllowed() {
    return smokersAllowed;
  }

  public void setSmokersAllowed(Boolean smokersAllowed) {
    this.smokersAllowed = smokersAllowed;
  }

  public Boolean getStudentsAllowed() {
    return studentsAllowed;
  }

  public void setStudentsAllowed(Boolean studentsAllowed) {
    this.studentsAllowed = studentsAllowed;
  }

  public PropertyType getPropertyType() {
    return propertyType;
  }

  public void setPropertyType(PropertyType propertyType) {
    this.propertyType = propertyType;
  }

  public Integer getMinPrice() {
    return minPrice;
  }

  public void setMinPrice(Integer minPrice) {
    this.minPrice = minPrice;
  }

  public Integer getMaxPrice() {
    return maxPrice;
  }

  public void setMaxPrice(Integer maxPrice) {
    this.maxPrice = maxPrice;
  }

  public Double getMinLatitude() {
    return minLatitude;
  }

  public void setMinLatitude(Double minLatitude) {
    this.minLatitude = minLatitude;
  }

  public Double getMinLongitude() {
    return minLongitude;
  }

  public void setMinLongitude(Double minLongitude) {
    this.minLongitude = minLongitude;
  }

  public Double getMaxLatitude() {
    return maxLatitude;
  }

  public void setMaxLatitude(Double maxLatitude) {
    this.maxLatitude = maxLatitude;
  }

  public Double getMaxLongitude() {
    return maxLongitude;
  }

  public void setMaxLongitude(Double maxLongitude) {
    this.maxLongitude = maxLongitude;
  }

  public Integer getPageSize() {
    return pageSize;
  }

  public void setPageSize(Integer pageSize) {
    this.pageSize = pageSize;
  }

  public Integer getPage() {
    return page;
  }

  public void setPage(Integer page) {
    this.page = page;
  }

  public Double getRadius() {
    return radius;
  }

  public void setRadius(Double radius) {
    this.radius = radius;
  }

  @Override
  public String toString() {
    return "PropertyFilterDTO{" +
            "addressLine1='" + addressLine1 + '\'' +
            ", addressLine2='" + addressLine2 + '\'' +
            ", addressLine3='" + addressLine3 + '\'' +
            ", postcode='" + postcode + '\'' +
            ", town='" + town + '\'' +
            ", numberOfBathrooms=" + numberOfBathrooms +
            ", minBeds=" + minBeds +
            ", maxBeds=" + maxBeds +
            ", numberOfLivingRooms=" + numberOfLivingRooms +
            ", hasGarden=" + hasGarden +
            ", hasParking=" + hasParking +
            ", petsAllowed=" + petsAllowed +
            ", smokersAllowed=" + smokersAllowed +
            ", studentsAllowed=" + studentsAllowed +
            ", propertyType='" + propertyType + '\'' +
            ", minPrice=" + minPrice +
            ", maxPrice=" + maxPrice +
            ", minLatitude=" + minLatitude +
            ", minLongitude=" + minLongitude +
            ", maxLatitude=" + maxLatitude +
            ", maxLongitude=" + maxLongitude +
            ", pageSize=" + pageSize +
            ", page=" + page +
            ", radius=" + radius +
            '}';
  }
}



