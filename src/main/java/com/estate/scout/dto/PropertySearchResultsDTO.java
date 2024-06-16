package com.estate.scout.dto;

import java.util.List;

public class PropertySearchResultsDTO {
    private long totalProperties;
    private List<PropertyDTO> properties;

    public PropertySearchResultsDTO(long totalProperties, List<PropertyDTO> properties) {
        this.totalProperties = totalProperties;
        this.properties = properties;
    }

    public long getTotalProperties() {
        return totalProperties;
    }

    public void setTotalProperties(long totalProperties) {
        this.totalProperties = totalProperties;
    }

    public List<PropertyDTO> getProperties() {
        return properties;
    }

    public void setProperties(List<PropertyDTO> properties) {
        this.properties = properties;
    }
}
