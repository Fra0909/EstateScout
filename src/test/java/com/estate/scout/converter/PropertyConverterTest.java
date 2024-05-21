package com.estate.scout.converter;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.enums.PropertyType;
import com.estate.scout.model.Property;
import org.junit.jupiter.api.Test;

public class PropertyConverterTest {

  @Test
  public void convertPropertyToPropertyDtoTest() {
    Property property = new Property(1L, "addressLine1", "addressLine2", "addressLine3", "postcode",
        "town", 1, 1, 1, true, true, true, true, true, PropertyType.FOR_RENT, 1, null, 1.0, 1.0);

    PropertyDTO actual = PropertyConverter.convert(property);
    PropertyDTO expected = new PropertyDTO(1L, "addressLine1", "addressLine2", "addressLine3",
        "postcode",
        "town", 1, 1, 1, true, true, true, true, true, PropertyType.FOR_RENT, 1, null, 1.0, 1.0);

    assertEquals(expected, actual);
  }

  @Test
  public void convertPropertyDtoToPropertyTest() {
    PropertyDTO property = new PropertyDTO(1L, "addressLine1", "addressLine2", "addressLine3",
        "postcode",
        "town", 1, 1, 1, true, true, true, true, true, PropertyType.FOR_RENT, 1, null, 1.0, 1.0);

    Property actual = PropertyConverter.convert(property);
    Property expected = new Property(1L, "addressLine1", "addressLine2", "addressLine3",
        "postcode",
        "town", 1, 1, 1, true, true, true, true, true, PropertyType.FOR_RENT, 1, null, 1.0, 1.0);

    assertEquals(expected, actual);
  }
}
