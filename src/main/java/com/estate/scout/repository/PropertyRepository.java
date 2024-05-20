package com.estate.scout.repository;

import com.estate.scout.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
	@Query("SELECT p FROM Property p WHERE" +
			"(:addressLine1 is null OR p.addressLine1 LIKE %:addressLine1%)" +
			" AND (:addressLine2 is null OR p.addressLine2 LIKE %:addressLine2%)" +
			" AND (:addressLine3 is null OR p.addressLine3 LIKE %:addressLine3%)" +
			" AND (:postcode is null OR p.postcode LIKE %:postcode%)" +
			" AND (:town is null OR p.town LIKE %:town%)" +
			" AND (:noOfBathrooms is null OR p.numberOfBathrooms = :noOfBathrooms)" +
			" AND (:noOfBedrooms is null OR p.numberOfBedrooms = :noOfBedrooms)" +
			" AND (:noOfLivingRooms is null OR p.numberOfLivingRooms = :noOfLivingRooms)" +
			" AND (:hasGarden is null OR p.hasGarden = :hasGarden)" +
			" AND (:hasParking is null OR p.hasParking = :hasParking)" +
			" AND (:petsAllowed is null OR p.petsAllowed = :petsAllowed)" +
			" AND (:smokersAllowed is null OR p.smokersAllowed = :smokersAllowed)" +
			" AND (:studentsAllowed is null OR p.studentsAllowed = :studentsAllowed)" +
			" AND (:propertyType is null OR p.propertyType = :propertyType)" +
			" AND (:minPrice is null OR :maxPrice is null OR p.priceInPence BETWEEN :minPrice AND :maxPrice)" +
			" AND (:minLatitude is null OR :maxLatitude is null OR p.latitude BETWEEN :minLatitude AND :maxLatitude)" +
			" AND (:minLongitude is null OR :maxLongitude is null OR p.longitude BETWEEN :minLongitude AND :maxLongitude)")
	List<Property> findByFilter(@Param("addressLine1") String addressLine1,
	                            @Param("addressLine2") String addressLine2,
	                            @Param("addressLine3") String addressLine3,
	                            @Param("postcode") String postcode,
	                            @Param("town") String town,
	                            @Param("noOfBathrooms") Integer noOfBathrooms,
	                            @Param("noOfBedrooms") Integer noOfBedrooms,
	                            @Param("noOfLivingRooms") Integer noOfLivingRooms,
	                            @Param("hasGarden") Boolean hasGarden,
	                            @Param("hasParking") Boolean hasParking,
	                            @Param("petsAllowed") Boolean petsAllowed,
	                            @Param("smokersAllowed") Boolean smokersAllowed,
	                            @Param("studentsAllowed") Boolean studentsAllowed,
	                            @Param("propertyType") String propertyType,
	                            @Param("minPrice") Integer minPrice,
	                            @Param("maxPrice") Integer maxPrice,
	                            @Param("minLatitude") Double minLatitude,
	                            @Param("maxLatitude") Double maxLatitude,
	                            @Param("minLongitude") Double minLongitude,
	                            @Param("maxLongitude") Double maxLongitude);
}
