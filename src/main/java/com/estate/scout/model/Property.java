package com.estate.scout.model;

import com.estate.scout.enums.PropertyType;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Property {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "property_id")
  private Long id;

  @Column(name = "address_line1")
  private String addressLine1;

  @Column(name = "address_line2")
  private String addressLine2;

  @Column(name = "address_line3")
  private String addressLine3;

  @Column(name = "postcode")
  private String postcode;

  @Column(name = "town")
  private String town;

  @Column(name = "no_of_bathrooms")
  private int numberOfBathrooms;

  @Column(name = "no_of_bedrooms")
  private int numberOfBedrooms;

  @Column(name = "no_of_living_rooms")
  private int numberOfLivingRooms;

  @Column(name = "has_garden")
  private boolean hasGarden;

  @Column(name = "has_parking")
  private boolean hasParking;

  @Column(name = "pets_allowed")
  private boolean petsAllowed;

  @Column(name = "smokers_allowed")
  private boolean smokersAllowed;

  @Column(name = "students_allowed")
  private boolean studentsAllowed;

  @Column(name = "property_type")
  @Enumerated(EnumType.STRING)
  private PropertyType propertyType;

  @Column(name = "price")
  private int price;

  @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<Image> images;

  @Column(name = "latitude")
  private Double latitude;

  @Column(name = "longitude")
  private Double longitude;

  @Column(name = "description")
  private String description;

  public Property() {
  }

  public Property(Long id, String addressLine1, String addressLine2, String addressLine3, String postcode, String town, int numberOfBathrooms, int numberOfBedrooms, int numberOfLivingRooms, boolean hasGarden, boolean hasParking, boolean petsAllowed, boolean smokersAllowed, boolean studentsAllowed, PropertyType propertyType, int price, List<Image> images, Double latitude, Double longitude, String description) {
    this.id = id;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.postcode = postcode;
    this.town = town;
    this.numberOfBathrooms = numberOfBathrooms;
    this.numberOfBedrooms = numberOfBedrooms;
    this.numberOfLivingRooms = numberOfLivingRooms;
    this.hasGarden = hasGarden;
    this.hasParking = hasParking;
    this.petsAllowed = petsAllowed;
    this.smokersAllowed = smokersAllowed;
    this.studentsAllowed = studentsAllowed;
    this.propertyType = propertyType;
    this.price = price;
    this.images = images;
    this.latitude = latitude;
    this.longitude = longitude;
    this.description = description;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public int getNumberOfBathrooms() {
    return numberOfBathrooms;
  }

  public void setNumberOfBathrooms(int numberOfBathrooms) {
    this.numberOfBathrooms = numberOfBathrooms;
  }

  public int getNumberOfBedrooms() {
    return numberOfBedrooms;
  }

  public void setNumberOfBedrooms(int numberOfBedrooms) {
    this.numberOfBedrooms = numberOfBedrooms;
  }

  public int getNumberOfLivingRooms() {
    return numberOfLivingRooms;
  }

  public void setNumberOfLivingRooms(int numberOfLivingRooms) {
    this.numberOfLivingRooms = numberOfLivingRooms;
  }

  public boolean isHasGarden() {
    return hasGarden;
  }

  public void setHasGarden(boolean hasGarden) {
    this.hasGarden = hasGarden;
  }

  public boolean isHasParking() {
    return hasParking;
  }

  public void setHasParking(boolean hasParking) {
    this.hasParking = hasParking;
  }

  public boolean isPetsAllowed() {
    return petsAllowed;
  }

  public void setPetsAllowed(boolean petsAllowed) {
    this.petsAllowed = petsAllowed;
  }

  public boolean isSmokersAllowed() {
    return smokersAllowed;
  }

  public void setSmokersAllowed(boolean smokersAllowed) {
    this.smokersAllowed = smokersAllowed;
  }

  public boolean isStudentsAllowed() {
    return studentsAllowed;
  }

  public void setStudentsAllowed(boolean studentsAllowed) {
    this.studentsAllowed = studentsAllowed;
  }

  public PropertyType getPropertyType() {
    return propertyType;
  }

  public void setPropertyType(PropertyType propertyType) {
    this.propertyType = propertyType;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public List<Image> getImages() {
    return images;
  }

  public void setImages(List<Image> images) {
    this.images = images;
  }

  public Double getLatitude() {
    return latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Double getLongitude() {
    return longitude;
  }

  public void setLongitude(Double longitude) {
    this.longitude = longitude;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Property{" +
            "id=" + id +
            ", addressLine1='" + addressLine1 + '\'' +
            ", addressLine2='" + addressLine2 + '\'' +
            ", addressLine3='" + addressLine3 + '\'' +
            ", postcode='" + postcode + '\'' +
            ", town='" + town + '\'' +
            ", numberOfBathrooms=" + numberOfBathrooms +
            ", numberOfBedrooms=" + numberOfBedrooms +
            ", numberOfLivingRooms=" + numberOfLivingRooms +
            ", hasGarden=" + hasGarden +
            ", hasParking=" + hasParking +
            ", petsAllowed=" + petsAllowed +
            ", smokersAllowed=" + smokersAllowed +
            ", studentsAllowed=" + studentsAllowed +
            ", propertyType=" + propertyType +
            ", price=" + price +
            ", images=" + images +
            ", latitude=" + latitude +
            ", longitude=" + longitude +
            ", description='" + description + '\'' +
            '}';
  }

  @Override
  public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
    Property property = (Property) o;
    return numberOfBathrooms == property.numberOfBathrooms
        && numberOfBedrooms == property.numberOfBedrooms
        && numberOfLivingRooms == property.numberOfLivingRooms && hasGarden == property.hasGarden
        && hasParking == property.hasParking && petsAllowed == property.petsAllowed
        && smokersAllowed == property.smokersAllowed && studentsAllowed == property.studentsAllowed
        && price == property.price && Objects.equals(id, property.id)
        && Objects.equals(addressLine1, property.addressLine1) && Objects.equals(addressLine2,
        property.addressLine2) && Objects.equals(addressLine3, property.addressLine3)
        && Objects.equals(postcode, property.postcode) && Objects.equals(town, property.town)
        && propertyType == property.propertyType && Objects.equals(images, property.images)
        && Objects.equals(latitude, property.latitude) && Objects.equals(longitude,
        property.longitude) && Objects.equals(description, property.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, addressLine1, addressLine2, addressLine3, postcode, town,
        numberOfBathrooms,
        numberOfBedrooms, numberOfLivingRooms, hasGarden, hasParking, petsAllowed, smokersAllowed,
        studentsAllowed, propertyType, price, images, latitude, longitude, description);
  }
}

