package com.estate.scout.repository;

import com.estate.scout.models.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@Service
@RestController
@RequestMapping("/api/property")
public class PropertyService {
	private final PropertyRepository propertyRepository;
	Logger LOG = Logger.getLogger(PropertyService.class.getName());

	@Autowired
	public PropertyService(PropertyRepository propertyRepository) {
		this.propertyRepository = propertyRepository;
	}

	@GetMapping
	public List<Property> getAll() {
		LOG.info("Retrieved all properties");
		return propertyRepository.findAll();
	}

	@GetMapping("/{id}")
	public Property getById(@PathVariable Long id) {
		LOG.info("Retrieved property " + id);
		return propertyRepository.getById(id);
	}

	@PostMapping
	public Property createProperty(Property property) {
		LOG.info("Created property " + property.getId());
		return propertyRepository.save(property);
	}

	@DeleteMapping("/{id}")
	public void deleteProperty(@PathVariable Long id) {
		propertyRepository.deleteById(id);
		LOG.info(String.format("Deleted property %s", id));
	}
}
