package com.estate.scout.service;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.dto.PropertyInDistanceDTO;
import com.estate.scout.model.Property;

import java.util.List;

public interface PropertyService {
  List<PropertyDTO> getAllProperties();
  PropertyDTO getPropertyById(Long id);
  PropertyDTO createProperty(PropertyDTO propertyDTO);
  void deletePropertyById(Long id);
  List<PropertyDTO> getPropertiesByFilter(PropertyFilterDTO filter);

  List<PropertyDTO> getPropertiesWithinDistance(long latitude, long longitude, int distanceInKilometres);

}
