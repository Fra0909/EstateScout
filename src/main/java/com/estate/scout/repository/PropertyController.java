package com.estate.scout.repository;

import com.estate.scout.models.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/property")
public class PropertyController {
	private final PropertyRepository propertyRepository;

	Logger LOG = Logger.getLogger(PropertyController.class.getName());

	@Autowired
	public PropertyController(PropertyRepository propertyRepository) {
		this.propertyRepository = propertyRepository;
	}

	@GetMapping
	public List<Property> getAllProperties() {
		LOG.info("Retrieved all properties");
		return propertyRepository.findAll();
	}

	@GetMapping("/{id}")
	public Property getPropertyById(@PathVariable Long id) {
		LOG.info("Retrieved property with ID: " + id);
		return propertyRepository.getById(id);
	}

	@PostMapping
	public Property createProperty(@RequestBody Property property) {
		LOG.info("Creating property: " + property.toString());
		return propertyRepository.save(property);
	}

	@DeleteMapping("/{id}")
	public void deletePropertyById(@PathVariable Long id) {
		propertyRepository.deleteById(id);
		LOG.info("Deleted property with ID: " + id);
	}

	@GetMapping("/filter")
	public List<Property> getPropertiesByFilter(
			@RequestParam(name = "addressLine1", required = false) String addressLine1,
			@RequestParam(name = "addressLine2", required = false) String addressLine2,
			@RequestParam(name = "addressLine3", required = false) String addressLine3,
			@RequestParam(name = "postcode", required = false) String postcode,
			@RequestParam(name = "town", required = false) String town,
			@RequestParam(name = "numberOfBathrooms", required = false) Integer noOfBathrooms,
			@RequestParam(name = "numberOfBedrooms", required = false) Integer noOfBedrooms,
			@RequestParam(name = "numberOfLivingRooms", required = false) Integer noOfLivingRooms,
			@RequestParam(name = "hasGarden", required = false) Boolean hasGarden,
			@RequestParam(name = "hasParking", required = false) Boolean hasParking,
			@RequestParam(name = "petsAllowed", required = false) Boolean petsAllowed,
			@RequestParam(name = "smokersAllowed", required = false) Boolean smokersAllowed,
			@RequestParam(name = "studentsAllowed", required = false) Boolean studentsAllowed,
			@RequestParam(name = "propertyType", required = false) String propertyType,
			@RequestParam(name = "minPrice", required = false) Integer minPrice,
			@RequestParam(name = "maxPrice", required = false) Integer maxPrice) {

		LOG.info("Retrieved properties with filter:");
		return propertyRepository.findByFilter(
				addressLine1, addressLine2, addressLine3, postcode, town,
				noOfBathrooms, noOfBedrooms, noOfLivingRooms,
				hasGarden, hasParking, petsAllowed, smokersAllowed,
				studentsAllowed, propertyType,
				minPrice, maxPrice);
	}

}
