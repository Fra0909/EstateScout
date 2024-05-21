package com.estate.scout.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Objects;
import javax.persistence.*;

@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String path;

    @ManyToOne
    @JoinColumn(name = "property_id")
    @JsonIgnore
    private Property property;

    public Image() {
    }

    public Image(Long id, String path, Property property) {
        this.id = id;
        this.path = path;
        this.property = property;
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

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    @Override
    public String toString() {
        return "Image{" +
            "id=" + id +
            ", path='" + path + '\'' +
            ", property=" + property +
            '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Image image = (Image) o;
        return Objects.equals(id, image.id) && Objects.equals(path, image.path)
            && Objects.equals(property, image.property);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, path, property);
    }
}