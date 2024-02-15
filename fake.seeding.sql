BEGIN;

-- Insertion de données dans la table LABEL
INSERT INTO "label" ("name", "year", "city", "country", "description", "url_image")
VALUES
('King Hi-Fi Sound System', 2005, 'Paris', 'France', 'King HiFi is a Sound System based in Lyon city, France. The King HiFi Family is the gathering of King HiFi (dOpeShack Selectah and Keryo Operatah) and the KPC, crew of youngproducers and deejay from Lyon city (Cooka, the riddim Chef, likkle ferguson and Ganka, the raggamuffin soldiers).
Our selection ranges from the early 70’s roots revival niceness to the latest cosmic warrior steppers - and even reggae influenced dubstep mash-ups - through all digital and dubwise styles from the 80’s and 90’s. What we will play will essentially depend on the vibes and the sounds we play with. We play dubplates, specials, and our own production made on our label KPC and mixed by the mighty Crystal Mixage outta Paris City.', '/images/logo_khf.jpg'),
('Pure Niceness Records', 2010, 'Berlin', 'Allemagne', 'Our main mission is to promote Reggae and dUb music, but we would also like to support bass culture in general - dubstep, drum and bass, jungle, globalbass... - by allowing artists from these scenes to play on a system built for this purpose.
So the first thing we do is organise our own events, playing strictly dubwise style and invinting special guests (other sound systems, singers…) to share the vibes with us. We are also ready to come and nice up your festivals and concerts with our sound system, selections and vibrations.
On the other hand the system is up for hire if you want the required power, bass and sound quality for your party to be a success.', '/images/logo_pureniceness.jpeg'),
('Mental Stamina Records', 2015, 'New York', 'USA', 'Côté label King Hi-Fi Sound System, petit frère de Pure Niceness Records.
Des influences allant de l’Afrika Bambaataa à Jah Shaka', '/images/logo_mental_stamina.jpg');

-- Insertion de données dans la table SOCIAL
INSERT INTO "social" ("name", "url", "label_id")
VALUES
('Facebook', 'https://facebook.com/label1', 1),
('Twitter', 'https://twitter.com/label1', 1),
('Instagram', 'https://instagram.com/label1', 1),
('Facebook', 'https://facebook.com/label2', 2),
('Twitter', 'https://twitter.com/label2', 2),
('Facebook', 'https://facebook.com/label3', 3),
('Instagram', 'https://instagram.com/label3', 3);

-- Insertion de données dans la table USER
INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthdate", "address", "zipcode", "city", "country")
VALUES
('user1@example.com', 'password1', 'John', 'Doe', '1990-05-15', '123 Street', '12345', 'Paris', 'France'),
('user2@example.com', 'password2', 'Jane', 'Smith', '1985-10-20', '456 Avenue', '67890', 'Berlin', 'Allemagne'),
('user3@example.com', 'password3', 'Michael', 'Johnson', '1992-03-10', '789 Road', '54321', 'New York', 'USA'),
('user4@example.com', 'password4', 'Anna', 'Brown', '1988-07-25', '101 Boulevard', '98765', 'London', 'UK'),
('user5@example.com', 'password5', 'Alex', 'Taylor', '1995-12-01', '202 Avenue', '13579', 'Tokyo', 'Japon'),
('user6@example.com', 'password6', 'Sophie', 'Garcia', '1983-09-05', '303 Street', '24680', 'Moscow', 'Russie'),
('user7@example.com', 'password7', 'Daniel', 'Martinez', '1998-01-20', '505 Road', '97531', 'Sydney', 'Australie'),
('user8@example.com', 'password8', 'Emma', 'White', '1993-04-30', '707 Boulevard', '36912', 'Rio de Janeiro', 'Brésil'),
('user9@example.com', 'password9', 'David', 'Lee', '1980-08-18', '909 Avenue', '75369', 'Cape Town', 'Afrique du Sud'),
('user10@example.com', 'password10', 'Sophia', 'Lopez', '1986-11-12', '111 Street', '58246', 'Toronto', 'Canada');

-- Insertion de données dans la table EVENT
INSERT INTO "event" ("name", "type", "description", "starting_date", "ending_date", "city", "country", "location", "url_image")
VALUES
('Event 1', 'Festival', 'Description de l''événement 1', '2024-07-01', '2024-07-03', 'Paris', 'France', 'Venue 1', 'url_image_event_1'),
('Event 2', 'Concert', 'Description de l''événement 2', '2024-08-15', '2024-08-15', 'Berlin', 'Allemagne', 'Venue 2', 'url_image_event_2'),
('Event 3', 'Exposition', 'Description de l''événement 3', '2024-09-20', '2024-09-25', 'New York', 'USA', 'Venue 3', 'url_image_event_3'),
('Event 4', 'Conférence', 'Description de l''événement 4', '2024-10-10', '2024-10-10', 'London', 'UK', 'Venue 4', 'url_image_event_4'),
('Event 5', 'Spectacle', 'Description de l''événement 5', '2024-11-05', '2024-11-06', 'Tokyo', 'Japon', 'Venue 5', 'url_image_event_5'),
('Event 6', 'Festival', 'Description de l''événement 6', '2024-12-25', '2024-12-31', 'Moscow', 'Russie', 'Venue 6', 'url_image_event_6'),
('Event 7', 'Concert', 'Description de l''événement 7', '2025-01-15', '2025-01-15', 'Sydney', 'Australie', 'Venue 7', 'url_image_event_7'),
('Event 8', 'Exposition', 'Description de l''événement 8', '2025-02-20', '2025-02-25', 'Rio de Janeiro', 'Brésil', 'Venue 8', 'url_image_event_8'),
('Event 9', 'Conférence', 'Description de l''événement 9', '2025-03-10', '2025-03-10', 'Cape Town', 'Afrique du Sud', 'Venue 9', 'url_image_event_9'),
('Event 10', 'Spectacle', 'Description de l''événement 10', '2025-04-15', '2025-04-16', 'Toronto', 'Canada', 'Venue 10', 'url_image_event_10');

-- Insertion de données dans la table ALBUM
INSERT INTO "album" ("name", "year", "url_image", "type", "label_id")
VALUES
('Album 1', 2020, 'url_image_album_1', 'Studio', 1),
('Album 2', 2018, 'url_image_album_2', 'Live', 2),
('Album 3', 2017, 'url_image_album_3', 'Studio', 3),
('Album 4', 2019, 'url_image_album_4', 'Live', 2),
('Album 5', 2015, 'url_image_album_5', 'Studio', 1),
('Album 6', 2014, 'url_image_album_6', 'Live', 3),
('Album 7', 2016, 'url_image_album_7', 'Studio', 1),
('Album 8', 2013, 'url_image_album_8', 'Live', 2),
('Album 9', 2011, 'url_image_album_9', 'Studio', 3),
('Album 10', 2012, 'url_image_album_10', 'Live', 1);

-- Insertion de données dans la table ARTIST
INSERT INTO "artist" ("firstname", "lastname", "nickname", "year", "city", "country", "description", "function", "url_image")
VALUES
('Alice', 'Jones', 'AJ', 1980, 'Paris', 'France', 'Description de l''artiste Alice Jones', 'Chanteuse', 'url_image_artist_1'),
('Bob', 'Smith', 'BS', 1975, 'Berlin', 'Allemagne', 'Description de l''artiste Bob Smith', 'Guitariste', 'url_image_artist_2'),
('Charlie', 'Brown', 'CB', 1988, 'New York', 'USA', 'Description de l''artiste Charlie Brown', 'Bassiste', 'url_image_artist_3'),
('Diana', 'Clark', 'DC', 1972, 'London', 'UK', 'Description de l''artiste Diana Clark', 'Batteuse', 'url_image_artist_4'),
('Eric', 'Adams', 'EA', 1985, 'Tokyo', 'Japon', 'Description de l''artiste Eric Adams', 'Claviériste', 'url_image_artist_5'),
('Fiona', 'Garcia', 'FG', 1982, 'Moscow', 'Russie', 'Description de l''artiste Fiona Garcia', 'Violoniste', 'url_image_artist_6'),
('George', 'Harris', 'GH', 1979, 'Sydney', 'Australie', 'Description de l''artiste George Harris', 'Trompettiste', 'url_image_artist_7'),
('Helen', 'Lopez', 'HL', 1976, 'Rio de Janeiro', 'Brésil', 'Description de l''artiste Helen Lopez', 'Saxophoniste', 'url_image_artist_8'),
('Ian', 'Martin', 'IM', 1983, 'Cape Town', 'Afrique du Sud', 'Description de l''artiste Ian Martin', 'Pianiste', 'url_image_artist_9'),
('Jack', 'Taylor', 'JT', 1987, 'Toronto', 'Canada', 'Description de l''artiste Jack Taylor', 'Choriste', 'url_image_artist_10');

-- Insertion de données dans la table TRACK
INSERT INTO "track" ("name", "year", "url_image", "url_sound", "duration", "style", "album_id")
VALUES
('Track 1', 2020, 'url_image_track_1', 'url_sound_track_1', 240, 'Rock', 1),
('Track 2', 2018, 'url_image_track_2', 'url_sound_track_2', 180, 'Pop', 2),
('Track 3', 2017, 'url_image_track_3', 'url_sound_track_3', 210, 'Jazz', 3),
('Track 4', 2019, 'url_image_track_4', 'url_sound_track_4', 200, 'Blues', 1),
('Track 5', 2015, 'url_image_track_5', 'url_sound_track_5', 220, 'Electronic', 2),
('Track 6', 2014, 'url_image_track_6', 'url_sound_track_6', 190, 'Hip-Hop', 3),
('Track 7', 2016, 'url_image_track_7', 'url_sound_track_7', 250, 'Reggae', 1),
('Track 8', 2013, 'url_image_track_8', 'url_sound_track_8', 230, 'R&B', 2),
('Track 9', 2011, 'url_image_track_9', 'url_sound_track_9', 260, 'Funk', 3),
('Track 10', 2012, 'url_image_track_10', 'url_sound_track_10', 170, 'Soul', 1);

-- Insertion de données dans la table USER_LIKE_TRACK
INSERT INTO "user_like_track" ("user_id", "track_id")
VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9);

-- Insertion de données dans la table TRACK_HAS_ARTIST
INSERT INTO "track_has_artist" ("track_id", "artist_id", "role", "order")
VALUES
(1, 1, 'Chanteur', 1),
(1, 2, 'Guitariste', 2),
(2, 1, 'Chanteur', 1),
(2, 3, 'Bassiste', 1),
(3, 3, 'Pianiste', 1),
(4, 4, 'Batteur', 1),
(5, 5, 'Claviériste', 1),
(6, 6, 'Violoniste', 1),
(7, 7, 'Trompettiste', 1),
(8, 8, 'Saxophoniste', 1);

COMMIT;