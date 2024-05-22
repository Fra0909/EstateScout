CREATE DATABASE IF NOT EXISTS estate_scout;
USE estate_scout;

DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS property;

CREATE TABLE IF NOT EXISTS property
(
    property_id        INT AUTO_INCREMENT PRIMARY KEY,
    address_line1      VARCHAR(50) NOT NULL,
    address_line2      VARCHAR(50),
    address_line3      VARCHAR(50),
    postcode           VARCHAR(20) NOT NULL,
    town               VARCHAR(20),
    no_of_bathrooms    INT         NOT NULL,
    no_of_bedrooms     INT         NOT NULL,
    no_of_living_rooms INT         NOT NULL,
    has_garden         BOOLEAN,
    has_parking        BOOLEAN,
    pets_allowed       BOOLEAN,
    smokers_allowed    BOOLEAN,
    students_allowed   BOOLEAN,
    property_type      VARCHAR(20) NOT NULL,
    price_in_pence     INT         NOT NULL,
    latitude           DECIMAL(8, 6),
    longitude          DECIMAL(9, 6)
);

CREATE TABLE IF NOT EXISTS image
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    path        VARCHAR(200) NOT NULL,
    property_id INT          NOT NULL,
    FOREIGN KEY (property_id) REFERENCES property (property_id)
);

SET foreign_key_checks = 0;

INSERT INTO property (address_line1, address_line2, address_line3, postcode, town, no_of_bathrooms,
                      no_of_bedrooms, no_of_living_rooms, has_garden, has_parking, pets_allowed,
                      smokers_allowed,
                      students_allowed, property_type, price_in_pence, latitude, longitude)
VALUES ('221B Baker Street', '', '', 'NW1 6XE', 'London', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 1000000, 51.523771, -0.158539),
       ('10 Downing Street', '', '', 'SW1A 2AA', 'London', 2, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 1500000, 51.503363, -0.127625),
       ('30 St Mary Axe', '', '', 'EC3A 8BF', 'London', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 2000000, 51.514463, -0.080338),
       ('160 Tooley Street', '', '', 'SE1 2QH', 'London', 1, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 800000, 51.504733, -0.080775),
       ('1 Canada Square', '', '', 'E14 5AB', 'London', 3, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 1800000, 51.504500, -0.019501),
       ('2 Savoy Place', '', '', 'WC2R 0BL', 'London', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 1300000, 51.510894, -0.119668);


INSERT INTO image (id, path, property_id)
VALUES (1, 'assets/imgs/1_1.webp', 1),
       (2, 'assets/imgs/1_2.webp', 1),
       (3, 'assets/imgs/1_3.webp', 1),
       (4, 'assets/imgs/1_4.webp', 1),
       (5, 'assets/imgs/2_1.webp', 2),
       (6, 'assets/imgs/2_2.webp', 2),
       (7, 'assets/imgs/2_3.webp', 2),
       (8, 'assets/imgs/2_4.webp', 2),
       (9, 'assets/imgs/3_1.webp', 3),
       (10, 'assets/imgs/3_2.webp', 3),
       (11, 'assets/imgs/3_3.webp', 3),
       (12, 'assets/imgs/3_4.webp', 3),
       (13, 'assets/imgs/4_1.webp', 4),
       (14, 'assets/imgs/4_2.webp', 4),
       (15, 'assets/imgs/4_3.webp', 4),
       (16, 'assets/imgs/4_4.webp', 4),
       (17, 'assets/imgs/5_1.webp', 5),
       (18, 'assets/imgs/5_2.webp', 5),
       (19, 'assets/imgs/5_3.webp', 5),
       (20, 'assets/imgs/5_4.webp', 5),
       (21, 'assets/imgs/6_1.webp', 6),
       (22, 'assets/imgs/6_2.webp', 6),
       (23, 'assets/imgs/6_3.webp', 6);

SET foreign_key_checks = 1;
