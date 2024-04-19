CREATE DATABASE IF NOT EXISTS estate_scout;
USE estate_scout;

CREATE TABLE IF NOT EXISTS property
(
    property_id                 INT AUTO_INCREMENT PRIMARY KEY,
    address_line1      VARCHAR(50),
    address_line2      VARCHAR(50),
    address_line3      VARCHAR(50),
    postcode           VARCHAR(20),
    town               VARCHAR(20),
    no_of_bathrooms    INT,
    no_of_bedrooms     INT,
    no_of_living_rooms INT,
    has_garden         BOOLEAN,
    has_parking        BOOLEAN,
    pets_allowed       BOOLEAN,
    smokers_allowed    BOOLEAN,
    students_allowed   BOOLEAN,
    property_type      VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS image
(
  id INT AUTO_INCREMENT PRIMARY KEY,
    path VARCHAR(200),
    property_id INT,
    FOREIGN KEY (property_id) REFERENCES property(property_id)
);

