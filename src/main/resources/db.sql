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
    property_type      VARCHAR(20),
    price              INT
);

CREATE TABLE IF NOT EXISTS image
(
  id INT AUTO_INCREMENT PRIMARY KEY,
    path VARCHAR(200),
    property_id INT,
    FOREIGN KEY (property_id) REFERENCES property(property_id)
);


INSERT INTO property (property_id, address_line1, address_line2, address_line3, postcode, town, no_of_bathrooms, no_of_bedrooms, no_of_living_rooms, has_garden, has_parking, pets_allowed, smokers_allowed, students_allowed, property_type, price)
VALUES
    (0, '12 Bellington', '', '', 'SE10 1BW', 'Greenwich', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE, 'FOR_SALE', 733425),
    (1, '9 Illison', '', '', 'SE10 4JW', 'Lewisham', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE, 'FOR_SALE', 335212),
    (2, '98 Hedgeway', '', '', 'SE15 2JK', 'Isle of Dogs', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE, 'FOR_SALE', 515232),
    (3, '20 River Road', '', '', 'SE11 5MN', 'Thamesmead', 3, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE, 'FOR_SALE', 650000),
    (4, '35 Oak Lane', '', '', 'SE12 6AB', 'Peckham', 1, 3, 2, FALSE, FALSE, TRUE, FALSE, FALSE, 'FOR_SALE', 290000),
    (5, '48 Pine Court', '', '', 'SE13 7QP', 'Blackheath', 2, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE, 'FOR_SALE', 410000);

INSERT INTO image (id, path, property_id)
VALUES
    (1, 'assets/imgs/0a.webp', 0),
    (2, 'assets/imgs/0b.webp', 0),
    (3, 'assets/imgs/0c.webp', 0),
    (4, 'assets/imgs/0d.webp', 0),
    (5, 'assets/imgs/1a.webp', 1),
    (6, 'assets/imgs/1b.webp', 1),
    (7, 'assets/imgs/1c.webp', 1),
    (8, 'assets/imgs/1d.webp', 1),
    (9, 'assets/imgs/2a.webp', 2),
    (10, 'assets/imgs/2b.webp', 2),
    (11, 'assets/imgs/2c.webp', 2),
    (12, 'assets/imgs/2d.webp', 2),
    (13, 'assets/imgs/3a.webp', 3),
    (14, 'assets/imgs/3b.webp', 3),
    (15, 'assets/imgs/3c.webp', 3),
    (16, 'assets/imgs/3d.webp', 3),
    (17, 'assets/imgs/4a.webp', 4),
    (18, 'assets/imgs/4b.webp', 4),
    (19, 'assets/imgs/4c.webp', 4),
    (20, 'assets/imgs/4d.webp', 4),
    (21, 'assets/imgs/5a.webp', 5),
    (22, 'assets/imgs/5b.webp', 5),
    (23, 'assets/imgs/5c.webp', 5),
    (24, 'assets/imgs/5d.webp', 5);