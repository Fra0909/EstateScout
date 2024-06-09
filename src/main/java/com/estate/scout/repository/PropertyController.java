package com.estate.scout.repository;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.service.PropertyService;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/property")
public class PropertyController {

  private final PropertyService propertyService;
  Logger LOG = Logger.getLogger(PropertyController.class.getName());

  @Autowired
  public PropertyController(PropertyService propertyService) {
    this.propertyService = propertyService;
  }

  @GetMapping
  public List<PropertyDTO> getAllProperties() {
    return propertyService.getAllProperties();
  }

  @GetMapping("/{id}")
  public PropertyDTO getPropertyById(@PathVariable Long id) {
    return propertyService.getPropertyById(id);
  }

  @PostMapping
  public PropertyDTO createProperty(@RequestBody PropertyDTO propertyDTO) {
    return propertyService.createProperty(propertyDTO);
  }

  @DeleteMapping("/{id}")
  public void deletePropertyById(@PathVariable Long id) {
    propertyService.deletePropertyById(id);
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/filter")
  public List<PropertyDTO> getPropertiesByFilter(@ModelAttribute PropertyFilterDTO filter) {
    return propertyService.getPropertiesByFilter(filter);
  }

}
