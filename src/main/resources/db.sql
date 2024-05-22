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
VALUES ('12 Bellington', '', '', 'SE108DA', 'Greenwich', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 733425, 51.4826, -0.0077),
       ('9 Illison', '', '', 'SE104JW', 'Lewisham', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 335212, 51.4597, -0.0188),
       ('98 Hedgeway', '', '', 'SE152JK', 'Isle of Dogs', 2, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 515232, 51.5095, -0.0243),
       ('20 River Road', '', '', 'SE115MN', 'Thamesmead', 3, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 650000, 51.4911, 0.0728),
       ('35 Oak Lane', '', '', 'SE126AB', 'Peckham', 1, 3, 2, FALSE, FALSE, TRUE, FALSE, FALSE,
        'FOR_SALE', 290000, 51.4743, -0.0560),
       ('48 Pine Court', '', '', 'SE137QP', 'Blackheath', 2, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
        'FOR_SALE', 410000, 51.4653, -0.0121);

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
