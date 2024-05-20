package com.estate.scout.dto;

public class ImageDTO {
	private Long id;
	private String path;
	private Long propertyId;

	public ImageDTO() {
	}

	public ImageDTO(Long id, String path, Long propertyId) {
		this.id = id;
		this.path = path;
		this.propertyId = propertyId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Long getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(Long propertyId) {
		this.propertyId = propertyId;
	}
}

