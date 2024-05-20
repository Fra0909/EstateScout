package com.estate.scout.dto;

public class PropertyFilter {
	private String addressLine1;
	private String addressLine2;
	private String addressLine3;
	private String postcode;
	private String town;
	private Integer numberOfBathrooms;
	private Integer numberOfBedrooms;
	private Integer numberOfLivingRooms;
	private Boolean hasGarden;
	private Boolean hasParking;
	private Boolean petsAllowed;
	private Boolean smokersAllowed;
	private Boolean studentsAllowed;
	private String propertyType;
	private Integer minPrice;
	private Integer maxPrice;
	private Double minLatitude;
	private Double minLongitude;
	private Double maxLatitude;
	private Double maxLongitude;

	public PropertyFilter(String addressLine1, String addressLine2, String addressLine3, String postcode, String town, Integer numberOfBathrooms, Integer numberOfBedrooms, Integer numberOfLivingRooms, Boolean hasGarden, Boolean hasParking, Boolean petsAllowed, Boolean smokersAllowed, Boolean studentsAllowed, String propertyType, Integer minPrice, Integer maxPrice, Double minLatitude, Double minLongitude, Double maxLatitude, Double maxLongitude) {
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
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.minLatitude = minLatitude;
		this.minLongitude = minLongitude;
		this.maxLatitude = maxLatitude;
		this.maxLongitude = maxLongitude;
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

	public Integer getNumberOfBedrooms() {
		return numberOfBedrooms;
	}

	public void setNumberOfBedrooms(Integer numberOfBedrooms) {
		this.numberOfBedrooms = numberOfBedrooms;
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

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
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

	@Override
	public String toString() {
		return "PropertyFilter{" +
				"addressLine1='" + addressLine1 + '\'' +
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
				", propertyType='" + propertyType + '\'' +
				", minPrice=" + minPrice +
				", maxPrice=" + maxPrice +
				", minLatitude=" + minLatitude +
				", minLongitude=" + minLongitude +
				", maxLatitude=" + maxLatitude +
				", maxLongitude=" + maxLongitude +
				'}';
	}
}

