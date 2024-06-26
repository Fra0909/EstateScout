package com.estate.scout.dto;

import com.estate.scout.enums.PropertyType;

import java.util.List;
import java.util.Objects;

public class PropertyDTO {
	private Long id;
	private String addressLine1;
	private String addressLine2;
	private String addressLine3;
	private String postcode;
	private String town;
	private int numberOfBathrooms;
	private int numberOfBedrooms;
	private int numberOfLivingRooms;
	private boolean hasGarden;
	private boolean hasParking;
	private boolean petsAllowed;
	private boolean smokersAllowed;
	private boolean studentsAllowed;
	private PropertyType propertyType;
	private int price;
	private List<ImageDTO> images;
	private Double latitude;
	private Double longitude;
	private String description;

	public PropertyDTO() {
	}

	public PropertyDTO(Long id, String addressLine1, String addressLine2, String addressLine3, String postcode, String town, int numberOfBathrooms, int numberOfBedrooms, int numberOfLivingRooms, boolean hasGarden, boolean hasParking, boolean petsAllowed, boolean smokersAllowed, boolean studentsAllowed, PropertyType propertyType, int price, List<ImageDTO> images, Double latitude, Double longitude, String description) {
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

	public boolean hasGarden() {
		return hasGarden;
	}

	public void setHasGarden(boolean hasGarden) {
		this.hasGarden = hasGarden;
	}

	public boolean hasParking() {
		return hasParking;
	}

	public void setHasParking(boolean hasParking) {
		this.hasParking = hasParking;
	}

	public boolean arePetsAllowed() {
		return petsAllowed;
	}

	public void setPetsAllowed(boolean petsAllowed) {
		this.petsAllowed = petsAllowed;
	}

	public boolean areSmokersAllowed() {
		return smokersAllowed;
	}

	public void setSmokersAllowed(boolean smokersAllowed) {
		this.smokersAllowed = smokersAllowed;
	}

	public boolean areStudentsAllowed() {
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

	public List<ImageDTO> getImages() {
		return images;
	}

	public void setImages(List<ImageDTO> images) {
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
		return "PropertyDTO{" +
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
		PropertyDTO that = (PropertyDTO) o;
		return numberOfBathrooms == that.numberOfBathrooms && numberOfBedrooms == that.numberOfBedrooms
				&& numberOfLivingRooms == that.numberOfLivingRooms && hasGarden == that.hasGarden
				&& hasParking == that.hasParking && petsAllowed == that.petsAllowed
				&& smokersAllowed == that.smokersAllowed && studentsAllowed == that.studentsAllowed
				&& price == that.price && Objects.equals(id, that.id)
				&& Objects.equals(addressLine1, that.addressLine1) && Objects.equals(
				addressLine2, that.addressLine2) && Objects.equals(addressLine3, that.addressLine3)
				&& Objects.equals(postcode, that.postcode) && Objects.equals(town,
				that.town) && propertyType == that.propertyType && Objects.equals(images,
				that.images) && Objects.equals(latitude, that.latitude) && Objects.equals(
				longitude, that.longitude) && Objects.equals(description, that.description);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, addressLine1, addressLine2, addressLine3, postcode, town,
				numberOfBathrooms, numberOfBedrooms, numberOfLivingRooms, hasGarden, hasParking,
				petsAllowed,
				smokersAllowed, studentsAllowed, propertyType, price, images, latitude, longitude, description);
	}
}
