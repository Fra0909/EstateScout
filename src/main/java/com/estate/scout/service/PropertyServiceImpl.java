package com.estate.scout.service;

import com.estate.scout.converter.PropertyConverter;
import com.estate.scout.dto.PropertyDTO;
import com.estate.scout.dto.PropertyFilterDTO;
import com.estate.scout.exception.InvalidParamException;
import com.estate.scout.helper.DistanceCalculator;
import com.estate.scout.model.Property;
import com.estate.scout.repository.PropertyRepository;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PropertyServiceImpl implements PropertyService {

  private final PropertyRepository propertyRepository;
  private final static HttpClient httpClient = HttpClient.newBuilder().build();

  Logger LOG = Logger.getLogger(PropertyServiceImpl.class.getName());


  @Autowired
  public PropertyServiceImpl(PropertyRepository propertyRepository) {
    this.propertyRepository = propertyRepository;
  }

  @Override
  public List<PropertyDTO> getAllProperties() {
    List<PropertyDTO> properties = propertyRepository.findAll().stream()
        .map(PropertyConverter::convert)
        .collect(Collectors.toList());
    LOG.info("Retrieved all properties");
    return properties;
  }

  @Override
  public PropertyDTO getPropertyById(Long id) {
    try {
      Property retrievedProperty = propertyRepository.getById(id);
      LOG.info("Retrieved property with ID: " + id);
      return PropertyConverter.convert(retrievedProperty);
    } catch (EntityNotFoundException e) {
      throw new EntityNotFoundException("Unable to find property with id " + id);
    }
  }

  @Override
  public PropertyDTO createProperty(PropertyDTO propertyDTO) {
    if (propertyDTO.getNumberOfBathrooms() < 1 || propertyDTO.getNumberOfBedrooms() < 1
        || propertyDTO.getNumberOfLivingRooms() < 1 || propertyDTO.getPriceInPence() < 1
        || propertyDTO.getPropertyType() == null || propertyDTO.getPostcode() == null) {
      throw new InvalidParamException(
          "The request body has invalid/missing values. Not creating new property.");
    }
    Property newProperty = propertyRepository.save(PropertyConverter.convert(propertyDTO));
    LOG.info("Created property: " + propertyDTO);
    return PropertyConverter.convert(newProperty);
  }

  @Override
  public void deletePropertyById(Long id) {
    try {
      propertyRepository.deleteById(id);
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      throw new EntityNotFoundException("Unable to find and delete property with id " + id);
    }
    LOG.info("Deleted property with ID: " + id);
  }

  @Override
  public List<PropertyDTO> getPropertiesByFilter(PropertyFilterDTO filter) {
    if (filter.getPostcode() != null && filter.getRadius() != null) {
      HashMap<String, Double> coordinates = getCoordinatesFromPostcode(filter.getPostcode());
      double[] boundingBox = DistanceCalculator.calculateBoundingBox(coordinates.get("latitude"), coordinates.get("longitude"), filter.getRadius());
      System.out.println(Arrays.toString(boundingBox));
      filter.setMinLatitude(boundingBox[0]);
      filter.setMinLongitude(boundingBox[1]);
      filter.setMaxLatitude(boundingBox[2]);
      filter.setMaxLongitude(boundingBox[3]);
      System.out.println(filter);
    }

    List<Property> properties = propertyRepository.findByFilter(
        filter.getAddressLine1(), filter.getAddressLine2(), filter.getAddressLine3(), filter.getTown(),
        filter.getNumberOfBathrooms(), filter.getMinBeds(), filter.getMaxBeds(),
        filter.getNumberOfLivingRooms(),
        filter.getHasGarden(), filter.getHasParking(), filter.getPetsAllowed(),
        filter.getSmokersAllowed(),
        filter.getStudentsAllowed(), filter.getPropertyType(),
        filter.getMinPrice(), filter.getMaxPrice(), filter.getMinLatitude(),
        filter.getMaxLatitude(),
        filter.getMinLongitude(), filter.getMaxLongitude(),
        PageRequest.of(filter.getPage() != null ? filter.getPage() : 0,
            filter.getPageSize() != null ? filter.getPageSize() : 10)).getContent();
    LOG.info("Retrieved properties with filter: " + filter);
    return properties.stream().map(PropertyConverter::convert).collect(Collectors.toList());
  }

  public HashMap<String, Double> getCoordinatesFromPostcode(String postcode) {
    HashMap<String, Double> geoCoordinates = new HashMap<>();
    HttpRequest request = HttpRequest.newBuilder(URI.create("https://api.postcodes.io/postcodes/" + postcode)).GET().build();
    try {
      HttpResponse<InputStream> response = httpClient.send(request, HttpResponse.BodyHandlers.ofInputStream());

      int statusCode = response.statusCode();

      if (statusCode == 200) {
        InputStream responseBody = response.body();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        double latitude = jsonNode.at("/result/latitude").asDouble();
        double longitude = jsonNode.at("/result/longitude").asDouble();

        geoCoordinates.put("latitude", latitude);
        geoCoordinates.put("longitude", longitude);

      }

    }
    catch (IOException | InterruptedException e) {
      throw new RuntimeException(e);
    }

    return geoCoordinates;
  }

}
