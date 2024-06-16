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
    has_garden         BOOLEAN DEFAULT FALSE,
    has_parking        BOOLEAN DEFAULT FALSE,
    pets_allowed       BOOLEAN DEFAULT FALSE,
    smokers_allowed    BOOLEAN DEFAULT FALSE,
    students_allowed   BOOLEAN DEFAULT FALSE,
    property_type      VARCHAR(20) NOT NULL,
    price     INT         NOT NULL,
    latitude           DECIMAL(8, 6),
    longitude          DECIMAL(9, 6),
    description        VARCHAR(1000)
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
                      smokers_allowed, students_allowed, property_type, price, latitude, longitude, description)
VALUES ('221B Baker Street', '', '', 'NW1 6XE', 'Greater London', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 1000000, 51.523771, -0.158539,
     '221B Baker Street is a historic property located in Greater London, NW1 6XE. Nestled in a vibrant area,
    it offers easy access to local amenities, parks, and cultural landmarks.
    The surrounding neighborhood is rich with history and charm, making it a sought-after location for both residents and visitors.'),

    ('10 Downing Street', '', '', 'SW1A 2AA', 'Westminster', 2, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 1500000, 51.503363, -0.127625,
     '10 Downing Street is a prestigious property situated in the heart of Westminster,
    SW1A 2AA. Located in a highly secure and sought-after area, it is close to numerous historical sites, government buildings, and cultural attractions.
    This iconic address is ideal for those desiring a central and esteemed location.'),

    ('30 St Mary Axe', '', '', 'EC3A 8BF', 'Cannon Street', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 2000000, 51.514463, -0.080338,
     '30 St Mary Axe, known as The Gherkin, is a modern and iconic property located in Cannon Street, EC3A 8BF.
    Surrounded by the vibrant financial district, it offers unparalleled views and proximity to premier dining, shopping, and cultural experiences.
    A landmark building perfect for high-end living.'),

    ('160 Tooley Street', '', '', 'SE10 0AH', 'Greenwich', 1, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 800000, 51.504733, -0.080775,
     '160 Tooley Street is a charming property located in Greenwich, SE10 0AH.
    Situated in a lively area, it offers easy access to the River Thames, parks, and historic landmarks.
    The surrounding neighborhood is perfect for families and professionals seeking a blend of history and modern amenities.'),

    ('1 Canada Square', '', '', 'E14 5AB', 'Canada Water', 3, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 1800000, 51.504500, -0.019501,
     '1 Canada Square is a prominent property in Canada Water, E14 5AB.
    Known for its towering presence and modern design, it is located in a bustling area with excellent transport links, shopping centers, and recreational facilities.
    Ideal for those looking for contemporary urban living.'),

    ('2 Savoy Place', '', '', 'WC2R 0BL', 'Covent Garden', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
     'FOR_SALE', 1300000, 51.510894, -0.119668,
     '2 Savoy Place is an elegant property situated in Covent Garden, WC2R 0BL.
    Nestled in a vibrant cultural district, it offers proximity to theaters, fine dining, and boutique shopping.
    The surrounding area is lively and full of charm, making it a perfect choice for city enthusiasts.'),

   ('1 Kensington Palace Gardens', '', '', 'W8 4QY', 'Kensington', 5, 8, 4, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 450000000, 51.504789, -0.188896,
    '1 Kensington Palace Gardens is an ultra-luxurious property located in Kensington, W8 4QY.
    This exclusive address offers unparalleled privacy and security, set amidst beautiful gardens and close to Kensington Palace.
    It is one of London’s most prestigious locations, perfect for high-profile residents.'),

   ('10 Downing Street', '', '', 'SW1A 2AA', 'Westminster', 2, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1500000, 51.503363, -0.127625,
    '10 Downing Street is a prestigious property situated in the heart of Westminster, SW1A 2AA.
    Located in a highly secure and sought-after area, it is close to numerous historical sites, government buildings, and cultural attractions.
    This iconic address is ideal for those desiring a central and esteemed location.'),

   ('30 St Mary Axe', '', '', 'EC3A 8BF', 'Cannon Street', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2000000, 51.514463, -0.080338,
    '30 St Mary Axe, known as The Gherkin, is a modern and iconic property located in Cannon Street, EC3A 8BF.
    Surrounded by the vibrant financial district, it offers unparalleled views and proximity to premier dining, shopping, and cultural experiences.
    A landmark building perfect for high-end living.'),

   ('160 Tooley Street', '', '', 'SE10 0AH', 'Greenwich', 1, 2, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 800000, 51.504733, -0.080775,
    '160 Tooley Street is a charming property located in Greenwich, SE10 0AH. Situated in a lively area, it offers easy access to the River Thames, parks, and historic landmarks.
    The surrounding neighborhood is perfect for families and professionals seeking a blend of history and modern amenities.'),

   ('1 Canada Square', '', '', 'E14 5AB', 'Canada Water', 3, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1800000, 51.504500, -0.019501,
    '1 Canada Square is a prominent property in Canada Water, E14 5AB.
    Known for its towering presence and modern design, it is located in a bustling area with excellent transport links, shopping centers, and recreational facilities.
    Ideal for those looking for contemporary urban living.'),

   ('2 Savoy Place', '', '', 'WC2R 0BL', 'Covent Garden', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1300000, 51.510894, -0.119668,
    '2 Savoy Place is an elegant property situated in Covent Garden, WC2R 0BL. Nestled in a vibrant cultural district, it offers proximity to theaters, fine dining, and boutique shopping.
    The surrounding area is lively and full of charm, making it a perfect choice for city enthusiasts.'),

   ('17 Cherry Tree Lane', '', '', 'SE1 8RT', 'Southwark', 3, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1200000, 51.503399, -0.119519,
    '17 Cherry Tree Lane is a delightful property located in Southwark, SE1 8RT. This charming home is situated in a picturesque area, close to parks, schools, and local amenities.
    The neighborhood offers a tranquil setting while being just a short commute from the bustling city center.'),

   ('50 Eaton Square', '', '', 'SW1W 9BD', 'Belgravia', 4, 6, 4, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 25000000, 51.495858, -0.151399,
    '50 Eaton Square is an exquisite property located in the prestigious area of Belgravia, SW1W 9BD.
    Surrounded by elegant gardens and close to high-end shops and restaurants, this luxurious home offers refined living in one of London’s most desirable neighborhoods.'),

   ('100 Pall Mall', '', '', 'SW1Y 5NQ', 'St James\'s', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 3000000, 51.505385, -0.132005,
    '100 Pall Mall is a prestigious property located in St James\'s, SW1Y 5NQ. Known for its historic and cultural significance, the area is home to exclusive clubs, galleries, and shops.
    This address offers luxury and sophistication in the heart of London.'),

   ('5 Cheyne Walk', '', '', 'SW3 5HS', 'Chelsea', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 6000000, 51.484530, -0.169501,
    '5 Cheyne Walk is a stunning riverside property located in Chelsea, SW3 5HS.
    Overlooking the Thames, this elegant home is surrounded by lush gardens and is close to boutique shops, gourmet restaurants, and cultural attractions.
    Ideal for those seeking a prestigious London address.'),

   ('30 Cadogan Square', '', '', 'SW1X 0HU', 'Knightsbridge', 4, 6, 4, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 22000000, 51.493889, -0.159722,
    '30 Cadogan Square is a magnificent property in Knightsbridge, SW1X 0HU. Located in one of London’s most sought-after areas, it offers luxury living with access to world-class shopping, dining, and cultural experiences.
    The property is perfect for those seeking elegance and convenience.'),

   ('1 Mayfair Place', '', '', 'W1J 8AJ', 'Mayfair', 3, 4, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 12000000, 51.507880, -0.142831,
    '1 Mayfair Place is a luxurious property located in the heart of Mayfair, W1J 8AJ.
    This exclusive address offers elegant living with close proximity to upscale shops, fine dining, and cultural landmarks.
    The area is renowned for its sophistication and charm, making it perfect for discerning residents.'),

   ('50 Grosvenor Square', '', '', 'W1K 3JP', 'Mayfair', 5, 7, 5, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 35000000, 51.510857, -0.151958,
    '50 Grosvenor Square is an opulent property situated in Mayfair, W1K 3JP. Located in one of London’s most prestigious squares, it offers luxurious living with access to world-class amenities and cultural sites.
    Ideal for those seeking the finest in central London living.'),

   ('18 Holland Park', '', '', 'W11 3TG', 'Holland Park', 3, 5, 3, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 8000000, 51.507268, -0.205328,
    '18 Holland Park is a stunning property located in the leafy neighborhood of Holland Park, W11 3TG. This elegant home offers a serene setting with easy access to beautiful parks, upscale shopping, and gourmet restaurants.
    Perfect for families and professionals seeking a tranquil yet vibrant area.'),

   ('22 Chester Square', '', '', 'SW1W 9HS', 'Belgravia', 4, 6, 4, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 26000000, 51.493843, -0.148276,
    '22 Chester Square is a grand property located in Belgravia, SW1W 9HS. Surrounded by charming squares and gardens, this luxurious home offers refined living in one of London’s most desirable areas.
    Close to high-end boutiques and dining, it is perfect for sophisticated city living.'),

    ('15 Chiswick High Road', '', '', 'W4 2LT', 'Chiswick', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1700000, 51.492616, -0.254605,
    '15 Chiswick High Road is a spacious property located in Chiswick, W4 2LT. This home features modern amenities and is close to excellent schools, parks, and dining options.
    Perfect for families seeking a blend of suburban tranquility and urban convenience.'),

    ('50 Primrose Hill Road', '', '', 'NW3 3EY', 'Primrose Hill', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2200000, 51.542585, -0.156900,
    '50 Primrose Hill Road is a beautiful property in Primrose Hill, NW3 3EY. Located near the famous park, it offers stunning views and a peaceful environment.
    The area is popular with families and professionals looking for a serene yet central location.'),

    ('85 Clapham Common North Side', '', '', 'SW4 9SE', 'Clapham', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1500000, 51.462577, -0.143193,
    '85 Clapham Common North Side is a delightful property situated in Clapham, SW4 9SE.
    Overlooking Clapham Common, it provides a perfect balance of green spaces and urban amenities. The area is ideal for families and young professionals.'),

    ('30 Richmond Hill', '', '', 'TW10 6QX', 'Richmond', 2, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2000000, 51.455245, -0.304967,
    '30 Richmond Hill is an elegant property located in Richmond, TW10 6QX. Known for its scenic beauty and historic charm, Richmond offers excellent schools, parks, and riverside walks.
    This home is perfect for those seeking a blend of nature and convenience.'),

    ('10 Notting Hill Gate', '', '', 'W11 3JE', 'Notting Hill', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1800000, 51.509675, -0.196537,
    '10 Notting Hill Gate is a stylish property in Notting Hill, W11 3JE. Famous for its vibrant culture and colorful streets, this area offers a lively atmosphere with excellent shopping and dining options.
    Ideal for those looking for a dynamic and trendy neighborhood.'),

    ('5 Hampstead High Street', '', '', 'NW3 1PX', 'Hampstead', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2500000, 51.555449, -0.178043,
    '5 Hampstead High Street is a prestigious property in Hampstead, NW3 1PX. This area is renowned for its literary history and beautiful heath.
    The home offers a peaceful retreat with excellent access to local amenities and cultural attractions.'),

    ('12 King\'s Road', '', '', 'SW3 4TS', 'Chelsea', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2400000, 51.487743, -0.169367,
    '12 King\'s Road is a charming property in Chelsea, SW3 4TS. Located on one of London’s most famous streets, it offers a blend of classic and contemporary living with easy access to high-end shops, restaurants, and galleries.
    Perfect for those seeking luxury in a historic area.'),

    ('8 Camden Square', '', '', 'NW1 9XA', 'Camden', 1, 4, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 1600000, 51.546207, -0.134388,
    '8 Camden Square is a vibrant property located in Camden, NW1 9XA. Known for its eclectic culture and lively markets, Camden offers a unique living experience.
    This home is ideal for young professionals and families looking for an energetic and diverse neighborhood.'),

    ('3 Portobello Road', '', '', 'W11 3DA', 'Notting Hill', 2, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_SALE', 2100000, 51.515117, -0.204248,
    '3 Portobello Road is a stylish property located in Notting Hill, W11 3DA. Famous for its market and colorful houses, this area offers a vibrant atmosphere with excellent dining and shopping options.
    Ideal for those looking for a trendy and dynamic neighborhood.'),

   ('100 Camden High Street', '', '', 'NW1 0LU', 'Camden', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3500, 51.539610, -0.142785,
    '100 Camden High Street is a spacious rental property located in Camden, NW1 0LU.
    This vibrant area offers eclectic markets, lively music scenes, and an array of dining options.
    Perfect for young professionals and families looking for a dynamic neighborhood.'),

   ('14 Brixton Road', '', '', 'SW9 6BU', 'Brixton', 2, 4, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3000, 51.467759, -0.109642,
    '14 Brixton Road is a modern rental property in Brixton, SW9 6BU. Known for its cultural diversity and vibrant nightlife, Brixton offers a range of amenities including parks, markets, and excellent transport links.
    Ideal for those seeking an energetic community.'),

   ('22 Hammersmith Grove', '', '', 'W6 7HB', 'Hammersmith', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3200, 51.495989, -0.228919,
    '22 Hammersmith Grove is a stylish rental property in Hammersmith, W6 7HB.
    This area offers excellent shopping, dining, and entertainment options, along with great transport links to central London.
    Perfect for families and professionals looking for convenience and comfort.'),

   ('8 Greenwich Park Street', '', '', 'SE10 9LB', 'Greenwich', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 2800, 51.478151, -0.008520,
    '8 Greenwich Park Street is a charming rental property in Greenwich, SE10 9LB.
    Located near the beautiful Greenwich Park, this home offers a serene environment with easy access to local amenities and historic sites.
    Ideal for families and nature lovers.'),

   ('17 Old Street', '', '', 'EC1V 9HL', 'Clerkenwell', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 4500, 51.524567, -0.098345,
    '17 Old Street is a spacious rental property located in Clerkenwell, EC1V 9HL.
    Known for its creative vibe and historic charm, the area offers a variety of dining, shopping, and cultural experiences.
    Perfect for professionals and families seeking a vibrant urban lifestyle.'),

   ('5 Kennington Park Road', '', '', 'SE11 4RS', 'Kennington', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 2700, 51.490574, -0.105116,
    '5 Kennington Park Road is a cozy rental property in Kennington, SE11 4RS.
    This area offers a mix of urban convenience and green spaces, with excellent transport links to central London.
    Ideal for professionals and small families.'),

   ('12 Fulham Road', '', '', 'SW6 1AA', 'Fulham', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3500, 51.483496, -0.195139,
    '12 Fulham Road is a spacious rental property located in Fulham, SW6 1AA.
    Known for its riverside walks and vibrant community, Fulham offers a range of amenities including parks, shops, and restaurants.
    Perfect for families and professionals.'),

   ('25 Southwark Street', '', '', 'SE1 1RQ', 'Southwark', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3000, 51.503858, -0.095351,
    '25 Southwark Street is a stylish rental property in Southwark, SE1 1RQ. This area is known for its cultural attractions, including the Tate Modern and Shakespeare’s Globe.
    Ideal for those seeking a vibrant and culturally rich neighborhood.'),

   ('45 Stoke Newington High Street', '', '', 'N16 8EL', 'Stoke Newington', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 2800, 51.559209, -0.076485,
    '45 Stoke Newington High Street is a charming rental property located in Stoke Newington, N16 8EL.
    Known for its village-like atmosphere and trendy cafes, this area is perfect for young professionals and families.'),

   ('10 Ealing Broadway', '', '', 'W5 2NT', 'Ealing', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3200, 51.512087, -0.300495,
    '10 Ealing Broadway is a spacious rental property in Ealing, W5 2NT. This area offers a mix of suburban tranquility and urban convenience, with excellent schools, parks, and transport links.
    Ideal for families and professionals.'),

   ('33 Battersea Park Road', '', '', 'SW11 4JP', 'Battersea', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 2900, 51.478937, -0.153300,
    '33 Battersea Park Road is a charming rental property located in Battersea, SW11 4JP.
    Close to the beautiful Battersea Park and the River Thames, this home offers a blend of green spaces and urban amenities.
    Perfect for families and young professionals.'),

   ('20 Shepherds Bush Road', '', '', 'W6 7PJ', 'Shepherd\'s Bush', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3100, 51.503309, -0.224156,
    '20 Shepherds Bush Road is a spacious rental property in Shepherds Bush, W6 7PJ. Known for its vibrant market and Westfield shopping center, the area offers excellent amenities and transport links.
    Ideal for families and professionals.'),

   ('5 Highbury Grove', '', '', 'N5 2EA', 'Highbury', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 2900, 51.552578, -0.101486,
    '5 Highbury Grove is a cozy rental property located in Highbury, N5 2EA.
    This area is known for its beautiful parks and strong community feel.
    Ideal for families and professionals seeking a peaceful yet well-connected neighborhood.'),

   ('30 Chiswick High Road', '', '', 'W4 1TE', 'Chiswick', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3500, 51.490870, -0.250835,
    '30 Chiswick High Road is a spacious rental property in Chiswick, W4 1TE. This area offers a village-like atmosphere with excellent schools, parks, and dining options.
    Perfect for families and professionals looking for a blend of suburban tranquility and urban convenience.'),

   ('18 Kensington High Street', '', '', 'W8 5NP', 'Kensington', 2, 4, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 4800, 51.499641, -0.192580,
    '18 Kensington High Street is a luxurious rental property located in Kensington, W8 5NP.
    This prestigious area offers high-end shopping, dining, and cultural attractions. Ideal for those seeking an elegant and well-connected neighborhood.'),

   ('27 Queens Gate', '', '', 'SW7 5JS', 'South Kensington', 1, 3, 1, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3700, 51.494559, -0.174508,
    '27 Queen\'s Gate is a stylish rental property in South Kensington, SW7 5JS. Known for its museums and cultural landmarks, this area offers a rich history and vibrant atmosphere.
    Perfect for families and professionals seeking a dynamic and sophisticated neighborhood.'),

   ('9 Upper Street', '', '', 'N1 0PQ', 'Islington', 1, 3, 2, TRUE, TRUE, TRUE, TRUE, TRUE,
    'FOR_RENT', 3200, 51.534589, -0.105545,
    '9 Upper Street is a charming rental property located in Islington, N1 0PQ.
    This area is known for its trendy boutiques, cafes, and vibrant nightlife.
    Ideal for young professionals and families looking for a lively and well-connected neighborhood.');


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
       (23, 'assets/imgs/6_3.webp', 6),
       (25, 'assets/imgs/7_1.webp', 7),
       (26, 'assets/imgs/7_2.webp', 7),
       (27, 'assets/imgs/7_3.webp', 7),
       (28, 'assets/imgs/8_1.webp', 8),
       (29, 'assets/imgs/8_2.webp', 8),
       (30, 'assets/imgs/8_3.webp', 8),
       (31, 'assets/imgs/9_1.webp', 9),
       (32, 'assets/imgs/9_2.webp', 9),
       (33, 'assets/imgs/9_3.webp', 9),
       (34, 'assets/imgs/10_1.webp', 10),
       (35, 'assets/imgs/10_2.webp', 10),
       (36, 'assets/imgs/10_3.webp', 10),
       (37, 'assets/imgs/11_1.webp', 11),
       (38, 'assets/imgs/11_2.webp', 11),
       (39, 'assets/imgs/11_3.webp', 11),
       (40, 'assets/imgs/12_1.webp', 12),
       (41, 'assets/imgs/12_2.webp', 12),
       (42, 'assets/imgs/12_3.webp', 12),
       (43, 'assets/imgs/13_1.webp', 13),
       (44, 'assets/imgs/13_2.webp', 13),
       (45, 'assets/imgs/13_3.webp', 13),
       (46, 'assets/imgs/14_1.webp', 14),
       (47, 'assets/imgs/14_2.webp', 14),
       (48, 'assets/imgs/14_3.webp', 14),
       (49, 'assets/imgs/15_1.webp', 15),
       (50, 'assets/imgs/15_2.webp', 15),
       (51, 'assets/imgs/15_3.webp', 15),
       (52, 'assets/imgs/16_1.webp', 16),
       (53, 'assets/imgs/16_2.webp', 16),
       (54, 'assets/imgs/16_3.webp', 16),
       (55, 'assets/imgs/17_1.webp', 17),
       (56, 'assets/imgs/17_2.webp', 17),
       (57, 'assets/imgs/17_3.webp', 17),
       (58, 'assets/imgs/18_1.webp', 18),
       (59, 'assets/imgs/18_2.webp', 18),
       (60, 'assets/imgs/18_3.webp', 18),
       (61, 'assets/imgs/19_1.webp', 19),
       (62, 'assets/imgs/19_2.webp', 19),
       (63, 'assets/imgs/19_3.webp', 19),
       (64, 'assets/imgs/20_1.webp', 20),
       (65, 'assets/imgs/20_2.webp', 20),
       (66, 'assets/imgs/20_3.webp', 20),
       (67, 'assets/imgs/21_1.webp', 21),
       (68, 'assets/imgs/21_2.webp', 21),
       (69, 'assets/imgs/21_3.webp', 21),
       (70, 'assets/imgs/22_1.webp', 22),
       (71, 'assets/imgs/22_2.webp', 22),
       (72, 'assets/imgs/22_3.webp', 22),
       (73, 'assets/imgs/23_1.webp', 23),
       (74, 'assets/imgs/23_2.webp', 23),
       (75, 'assets/imgs/23_3.webp', 23),
       (76, 'assets/imgs/24_1.webp', 24),
       (77, 'assets/imgs/24_2.webp', 24),
       (78, 'assets/imgs/24_3.webp', 24),
       (79, 'assets/imgs/25_1.webp', 25),
       (80, 'assets/imgs/25_2.webp', 25),
       (81, 'assets/imgs/25_3.webp', 25),
       (82, 'assets/imgs/26_1.webp', 26),
       (83, 'assets/imgs/26_2.webp', 26),
       (84, 'assets/imgs/26_3.webp', 26),
       (85, 'assets/imgs/27_1.webp', 27),
       (86, 'assets/imgs/27_2.webp', 27),
       (87, 'assets/imgs/27_3.webp', 27),
       (88, 'assets/imgs/28_1.webp', 28),
       (89, 'assets/imgs/28_2.webp', 28),
       (90, 'assets/imgs/28_3.webp', 28),
       (91, 'assets/imgs/29_1.webp', 29),
       (92, 'assets/imgs/29_2.webp', 29),
       (93, 'assets/imgs/29_3.webp', 29),
       (94, 'assets/imgs/30_1.webp', 30),
       (95, 'assets/imgs/30_2.webp', 30),
       (96, 'assets/imgs/30_3.webp', 30),
       (97, 'assets/imgs/31_1.webp', 31),
       (98, 'assets/imgs/31_2.webp', 31),
       (99, 'assets/imgs/31_3.webp', 31),
       (100, 'assets/imgs/32_1.webp', 32),
       (101, 'assets/imgs/32_2.webp', 32),
       (102, 'assets/imgs/32_3.webp', 32),
       (103, 'assets/imgs/33_1.webp', 33),
       (104, 'assets/imgs/33_2.webp', 33),
       (105, 'assets/imgs/33_3.webp', 33),
       (106, 'assets/imgs/34_1.webp', 34),
       (107, 'assets/imgs/34_2.webp', 34),
       (108, 'assets/imgs/34_3.webp', 34),
       (109, 'assets/imgs/35_1.webp', 35),
       (110, 'assets/imgs/35_2.webp', 35),
       (111, 'assets/imgs/35_3.webp', 35),
       (112, 'assets/imgs/36_1.webp', 36),
       (113, 'assets/imgs/36_2.webp', 36),
       (114, 'assets/imgs/36_3.webp', 36),
       (115, 'assets/imgs/37_1.webp', 37),
       (116, 'assets/imgs/37_2.webp', 37),
       (117, 'assets/imgs/37_3.webp', 37),
       (118, 'assets/imgs/38_1.webp', 38),
       (119, 'assets/imgs/38_2.webp', 38),
       (120, 'assets/imgs/38_3.webp', 38),
       (121, 'assets/imgs/39_1.webp', 39),
       (122, 'assets/imgs/39_2.webp', 39),
       (123, 'assets/imgs/39_3.webp', 39),
       (124, 'assets/imgs/40_1.webp', 40),
       (125, 'assets/imgs/40_2.webp', 40),
       (126, 'assets/imgs/40_3.webp', 40),
       (127, 'assets/imgs/41_1.webp', 41),
       (128, 'assets/imgs/41_2.webp', 41),
       (129, 'assets/imgs/41_3.webp', 41),
       (130, 'assets/imgs/42_1.webp', 42),
       (131, 'assets/imgs/42_2.webp', 42),
       (132, 'assets/imgs/42_3.webp', 42),
       (133, 'assets/imgs/43_1.webp', 43),
       (134, 'assets/imgs/43_2.webp', 43),
       (135, 'assets/imgs/43_3.webp', 43),
       (136, 'assets/imgs/44_1.webp', 44),
       (137, 'assets/imgs/44_2.webp', 44),
       (138, 'assets/imgs/44_3.webp', 44),
       (139, 'assets/imgs/45_1.webp', 45),
       (140, 'assets/imgs/45_2.webp', 45),
       (141, 'assets/imgs/45_3.webp', 45),
       (142, 'assets/imgs/46_1.webp', 46),
       (143, 'assets/imgs/46_2.webp', 46),
       (144, 'assets/imgs/46_3.webp', 46),
       (145, 'assets/imgs/47_1.webp', 47),
       (146, 'assets/imgs/47_2.webp', 47),
       (147, 'assets/imgs/47_3.webp', 47);

SET foreign_key_checks = 1;
