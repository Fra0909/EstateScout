package com.estate.scout.converter;

import com.estate.scout.dto.ImageDTO;
import com.estate.scout.model.Image;

public class ImageToImageDtoConverter {
	public static ImageDTO convert(Image image) {
		return new ImageDTO(image.getId(), image.getPath());
	}
}
