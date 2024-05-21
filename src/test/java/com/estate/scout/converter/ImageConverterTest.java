package com.estate.scout.converter;

import com.estate.scout.dto.ImageDTO;
import com.estate.scout.model.Image;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ImageConverterTest {

  @Test
  public void convertImageToImageDtoTest() {
    Image image = new Image(1L, "path", null);

    ImageDTO actual = ImageConverter.convert(image);
    ImageDTO expected = new ImageDTO(1L, "path");

    assertEquals(expected, actual);
  }

  @Test
  public void convertImageDtoToImageTest() {
    ImageDTO image = new ImageDTO(1L, "path");

    Image actual = ImageConverter.convert(image);
    Image expected = new Image(1L, "path", null);

    assertEquals(expected, actual);
  }
}
