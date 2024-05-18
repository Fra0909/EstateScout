CREATE DATABASE IF NOT EXISTS estate_scout;
USE estate_scout;

CREATE TABLE IF NOT EXISTS property
(
    property_id        INT AUTO_INCREMENT PRIMARY KEY,
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
    id          INT AUTO_INCREMENT PRIMARY KEY,
    path        VARCHAR(200),
    property_id INT,
    FOREIGN KEY (property_id) REFERENCES property (property_id)
);

DELETE from image;
DELETE FROM property;

INSERT INTO property (address_line1, address_line2, address_line3, postcode, town, no_of_bathrooms, no_of_bedrooms,
                      no_of_living_rooms, has_garden, has_parking, pets_allowed, smokers_allowed, students_allowed,
                      property_type)
VALUES ('123 Main St', 'Apt 1', 'Building A', 'AB12 3CD', 'Townsville', 2, 3, 1, 1, 1, 0, 1, 1, 'FOR_SALE'),
       ('456 Elm St', 'Suite 200', 'Building B', 'EF34 5GH', 'Cityville', 1, 2, 1, 0, 1, 1, 0, 1, 'FOR_RENT'),
       ('789 Oak St', NULL, NULL, 'IJ67 8KL', 'Villageville', 3, 4, 2, 1, 1, 1, 1, 0, 'FOR_SALE'),
       ('101 Pine St', 'Unit 5', 'Building C', 'MN89 0OP', 'Hamletown', 2, 3, 1, 1, 0, 1, 0, 1, 'FOR_SALE'),
       ('222 Maple St', 'Apt 3B', 'Building D', 'QR12 3ST', 'Townsville', 1, 1, 0, 0, 1, 0, 1, 1, 'FOR_RENT'),
       ('333 Cedar St', 'Unit 10', 'Building E', 'UV34 5WX', 'Cityville', 2, 2, 1, 1, 1, 0, 0, 1, 'FOR_RENT'),
       ('444 Birch St', NULL, NULL, 'YZ67 8AB', 'Villageville', 2, 3, 1, 1, 1, 0, 1, 1, 'FOR_SALE'),
       ('555 Walnut St', 'Apt 2A', 'Building F', 'CD89 0EF', 'Hamletown', 1, 1, 1, 0, 0, 1, 0, 1, 'FOR_RENT'),
       ('666 Spruce St', 'Unit 7', 'Building G', 'GH12 3IJ', 'Townsville', 3, 4, 2, 1, 1, 1, 1, 0, 'FOR_SALE'),
       ('777 Hickory St', NULL, NULL, 'KL34 5MN', 'Cityville', 2, 2, 1, 1, 1, 0, 1, 1, 'FOR_SALE');

INSERT INTO image (path, property_id)
VALUES ('/images/123_main_st.jpg', 1),
       ('/images/456_elm_st.jpg', 2),
       ('/images/789_oak_st.jpg', 3),
       ('/images/101_pine_st.jpg', 4),
       ('/images/222_maple_st.jpg', 5),
       ('/images/333_cedar_st.jpg', 6),
       ('/images/444_birch_st.jpg', 7),
       ('/images/555_walnut_st.jpg', 8),
       ('/images/666_spruce_st.jpg', 9),
       ('/images/777_hickory_st.jpg', 10);
