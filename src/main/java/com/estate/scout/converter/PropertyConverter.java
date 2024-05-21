package com.estate.scout.converter;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.model.Property;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class PropertyConverter {

  public static PropertyDTO convert(Property property) {
    return new PropertyDTO(
        property.getId(),
        property.getAddressLine1(),
        property.getAddressLine2(),
        property.getAddressLine3(),
        property.getPostcode(),
        property.getTown(),
        property.getNumberOfBathrooms(),
        property.getNumberOfBedrooms(),
        property.getNumberOfLivingRooms(),
        property.isHasGarden(),
        property.isHasParking(),
        property.isPetsAllowed(),
        property.isSmokersAllowed(),
        property.isStudentsAllowed(),
        property.getPropertyType(),
        property.getPriceInPence(),
        property.getImages() != null ? property.getImages().stream()
            .map(ImageConverter::convert)
            .collect(Collectors.toList()) : null,
        property.getLatitude(),
        property.getLongitude()
    );
  }

  public static Property convert(PropertyDTO propertyDTO) {
    Property property = new Property();
    property.setId(propertyDTO.getId());
    property.setAddressLine1(propertyDTO.getAddressLine1());
    property.setAddressLine2(propertyDTO.getAddressLine2());
    property.setAddressLine3(propertyDTO.getAddressLine3());
    property.setPostcode(propertyDTO.getPostcode());
    property.setTown(propertyDTO.getTown());
    property.setNumberOfBathrooms(propertyDTO.getNumberOfBathrooms());
    property.setNumberOfBedrooms(propertyDTO.getNumberOfBedrooms());
    property.setNumberOfLivingRooms(propertyDTO.getNumberOfLivingRooms());
    property.setHasGarden(propertyDTO.isHasGarden());
    property.setHasParking(propertyDTO.isHasParking());
    property.setPetsAllowed(propertyDTO.isPetsAllowed());
    property.setSmokersAllowed(propertyDTO.isSmokersAllowed());
    property.setStudentsAllowed(propertyDTO.isStudentsAllowed());
    property.setPropertyType(propertyDTO.getPropertyType());
    property.setPriceInPence(propertyDTO.getPriceInPence());
    property.setLatitude(propertyDTO.getLatitude());
    property.setLongitude(propertyDTO.getLongitude());
    if (propertyDTO.getImages() != null) {
      property.setImages(propertyDTO.getImages().stream()
          .map(ImageConverter::convert)
          .collect(Collectors.toList()));
    }

    return property;
  }
}
