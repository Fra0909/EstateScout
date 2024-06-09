package com.estate.scout.service;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;

import java.util.HashMap;
import java.util.List;

public interface PropertyService {
  List<PropertyDTO> getAllProperties();
  PropertyDTO getPropertyById(Long id);
  PropertyDTO createProperty(PropertyDTO propertyDTO);
  void deletePropertyById(Long id);
  List<PropertyDTO> getPropertiesByFilter(PropertyFilterDTO filter);
}
