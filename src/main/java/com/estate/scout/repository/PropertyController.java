package com.estate.scout.repository;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.model.Property;
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
	public PropertyDTO getPropertyById(@PathVariable Long id) {
		LOG.info("Retrieved property with ID: " + id);
		return PropertyDTO.convertToDTO(propertyRepository.getById(id));
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
	public List<Property> getPropertiesByFilter(PropertyFilterDTO filter) {
		LOG.info("Retrieved properties with filter: " + filter);
		return propertyRepository.findByFilter(
				filter.getAddressLine1(), filter.getAddressLine2(), filter.getAddressLine3(), filter.getPostcode(), filter.getTown(),
				filter.getNumberOfBathrooms(), filter.getNumberOfBedrooms(), filter.getNumberOfLivingRooms(),
				filter.getHasGarden(), filter.getHasParking(), filter.getPetsAllowed(), filter.getSmokersAllowed(),
				filter.getStudentsAllowed(), filter.getPropertyType(),
				filter.getMinPrice(), filter.getMaxPrice(), filter.getMinLatitude(), filter.getMaxLatitude(),
				filter.getMinLongitude(), filter.getMaxLongitude());
	}

}
