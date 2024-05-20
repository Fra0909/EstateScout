package com.estate.scout.converter;

import com.estate.scout.dto.ImageDTO;
import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.model.Property;

import java.util.stream.Collectors;

public class PropertyToPropertyDtoConverter {
	public static PropertyDTO convertToDTO(Property property) {
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
				property.getImages().stream()
						.map(ImageToImageDtoConverter::convert)
						.collect(Collectors.toList()),
				property.getLatitude(),
				property.getLongitude()
		);
	}
}
