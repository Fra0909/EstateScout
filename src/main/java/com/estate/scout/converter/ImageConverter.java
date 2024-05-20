package com.estate.scout.converter;

import com.estate.scout.dto.ImageDTO;
import com.estate.scout.model.Image;

public class ImageConverter {
	public static ImageDTO convert(Image image) {
		return new ImageDTO(image.getId(), image.getPath());
	}

	public static Image convert(ImageDTO imageDTO) {
		Image image = new Image();
		image.setId(imageDTO.getId());
		image.setPath(imageDTO.getPath());
		return image;
	}
}
