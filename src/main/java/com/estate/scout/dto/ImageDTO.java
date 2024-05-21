package com.estate.scout.dto;

import java.util.Objects;

public class ImageDTO {
	private Long id;
	private String path;

	public ImageDTO() {
	}

	public ImageDTO(Long id, String path) {
		this.id = id;
		this.path = path;
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

	@Override
	public String toString() {
		return "ImageDTO{" +
				"id=" + id +
				", path='" + path + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ImageDTO imageDTO = (ImageDTO) o;
		return Objects.equals(id, imageDTO.id) && Objects.equals(path, imageDTO.path);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, path);
	}
}

