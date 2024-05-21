package com.estate.scout.repository;

import com.estate.scout.converter.PropertyConverter;
import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.model.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

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
    public List<PropertyDTO> getAllProperties() {
        LOG.info("Retrieved all properties");
        return propertyRepository.findAll().stream()
                .map(PropertyConverter::convert)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public PropertyDTO getPropertyById(@PathVariable Long id) {
        LOG.info("Retrieved property with ID: " + id);
        return PropertyConverter.convert(propertyRepository.getById(id));
    }

    @PostMapping
    public Property createProperty(@RequestBody PropertyDTO propertyDTO) {
        LOG.info("Creating property: " + propertyDTO.toString());
        return propertyRepository.save(PropertyConverter.convert(propertyDTO));
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
                filter.getMinLongitude(), filter.getMaxLongitude(), (Pageable) PageRequest.of(1, filter.getLimit()));
    }
}
