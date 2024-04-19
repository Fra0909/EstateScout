package com.estate.scout.models;

import com.estate.scout.enums.PropertyType;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

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
	private PropertyType propertyType;

	@OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
	private List<Image> images;

	public Property() {
	}

	public Property(Long id, String addressLine1, String addressLine2, String addressLine3, String postcode,
	                String town, int numberOfBathrooms, int numberOfBedrooms, int numberOfLivingRooms,
	                boolean hasGarden, boolean hasParking, boolean petsAllowed, boolean smokersAllowed,
	                boolean studentsAllowed, PropertyType propertyType, List<Image> images) {
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
		this.images = images;
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

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
}

