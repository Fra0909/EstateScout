package com.estate.scout.repository;

import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.enums.PropertyType;
import com.estate.scout.model.Property;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
	@Query("SELECT COUNT(p) FROM Property p WHERE" +
			"(:#{#filter.addressLine1} is null OR p.addressLine1 LIKE %:#{#filter.addressLine1}%)" +
			" AND (:#{#filter.addressLine2} is null OR p.addressLine2 LIKE %:#{#filter.addressLine2}%)" +
			" AND (:#{#filter.addressLine3} is null OR p.addressLine3 LIKE %:#{#filter.addressLine3}%)" +
			" AND (:#{#filter.town} is null OR p.town LIKE %:#{#filter.town}%)" +
			" AND (:#{#filter.numberOfBathrooms} is null OR p.numberOfBathrooms = :#{#filter.numberOfBathrooms})" +
			" AND (:#{#filter.minBeds} is null OR p.numberOfBedrooms >= :#{#filter.minBeds})" +
			" AND (:#{#filter.maxBeds} is null OR p.numberOfBedrooms <= :#{#filter.maxBeds})" +
			" AND (:#{#filter.numberOfLivingRooms} is null OR p.numberOfLivingRooms = :#{#filter.numberOfLivingRooms})" +
			" AND (:#{#filter.hasGarden} is null OR p.hasGarden = :#{#filter.hasGarden})" +
			" AND (:#{#filter.hasParking} is null OR p.hasParking = :#{#filter.hasParking})" +
			" AND (:#{#filter.petsAllowed} is null OR p.petsAllowed = :#{#filter.petsAllowed})" +
			" AND (:#{#filter.smokersAllowed} is null OR p.smokersAllowed = :#{#filter.smokersAllowed})" +
			" AND (:#{#filter.studentsAllowed} is null OR p.studentsAllowed = :#{#filter.studentsAllowed})" +
			" AND (:#{#filter.propertyType} is null OR p.propertyType = :#{#filter.propertyType})" +
			" AND (:#{#filter.minPrice} is null OR p.price >= :#{#filter.minPrice})" +
			" AND (:#{#filter.maxPrice} is null OR p.price <= :#{#filter.maxPrice})" +
			" AND (:#{#filter.minLatitude} is null OR :#{#filter.maxLatitude} is null OR (p.latitude BETWEEN :#{#filter.minLatitude} AND :#{#filter.maxLatitude}))" +
			" AND (:#{#filter.minLongitude} is null OR :#{#filter.maxLongitude} is null OR (p.longitude BETWEEN :#{#filter.minLongitude} AND :#{#filter.maxLongitude}))")
	long countByFilter(@Param("filter") PropertyFilterDTO filter);

	@Query("SELECT p FROM Property p WHERE" +
			"(:#{#filter.addressLine1} is null OR p.addressLine1 LIKE %:#{#filter.addressLine1}%)" +
			" AND (:#{#filter.addressLine2} is null OR p.addressLine2 LIKE %:#{#filter.addressLine2}%)" +
			" AND (:#{#filter.addressLine3} is null OR p.addressLine3 LIKE %:#{#filter.addressLine3}%)" +
			" AND (:#{#filter.town} is null OR p.town LIKE %:#{#filter.town}%)" +
			" AND (:#{#filter.numberOfBathrooms} is null OR p.numberOfBathrooms = :#{#filter.numberOfBathrooms})" +
			" AND (:#{#filter.minBeds} is null OR p.numberOfBedrooms >= :#{#filter.minBeds})" +
			" AND (:#{#filter.maxBeds} is null OR p.numberOfBedrooms <= :#{#filter.maxBeds})" +
			" AND (:#{#filter.numberOfLivingRooms} is null OR p.numberOfLivingRooms = :#{#filter.numberOfLivingRooms})" +
			" AND (:#{#filter.hasGarden} is null OR p.hasGarden = :#{#filter.hasGarden})" +
			" AND (:#{#filter.hasParking} is null OR p.hasParking = :#{#filter.hasParking})" +
			" AND (:#{#filter.petsAllowed} is null OR p.petsAllowed = :#{#filter.petsAllowed})" +
			" AND (:#{#filter.smokersAllowed} is null OR p.smokersAllowed = :#{#filter.smokersAllowed})" +
			" AND (:#{#filter.studentsAllowed} is null OR p.studentsAllowed = :#{#filter.studentsAllowed})" +
			" AND (:#{#filter.propertyType} is null OR p.propertyType = :#{#filter.propertyType})" +
			" AND (:#{#filter.minPrice} is null OR p.price >= :#{#filter.minPrice})" +
			" AND (:#{#filter.maxPrice} is null OR p.price <= :#{#filter.maxPrice})" +
			" AND (:#{#filter.minLatitude} is null OR :#{#filter.maxLatitude} is null OR (p.latitude BETWEEN :#{#filter.minLatitude} AND :#{#filter.maxLatitude}))" +
			" AND (:#{#filter.minLongitude} is null OR :#{#filter.maxLongitude} is null OR (p.longitude BETWEEN :#{#filter.minLongitude} AND :#{#filter.maxLongitude}))")
	Page<Property> findByFilter(@Param("filter") PropertyFilterDTO filter, Pageable pageable);
}
