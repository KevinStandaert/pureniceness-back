BEGIN;

-- Insertion de données dans la table LABEL
INSERT INTO "label" ("name", "year", "city", "country", "description", "url_image")
VALUES
('King Hi-Fi Sound System', 2010, 'Paris', 'France', 'King HiFi is a Sound System based in Lyon city, France. The King HiFi Family is the gathering of King HiFi (dOpeShack Selectah and Keryo Operatah) and the KPC, crew of youngproducers and deejay from Lyon city (Cooka, the riddim Chef, likkle ferguson and Ganka, the raggamuffin soldiers).
Our selection ranges from the early 70’s roots revival niceness to the latest cosmic warrior steppers - and even reggae influenced dubstep mash-ups - through all digital and dubwise styles from the 80’s and 90’s. What we will play will essentially depend on the vibes and the sounds we play with. We play dubplates, specials, and our own production made on our label KPC and mixed by the mighty Crystal Mixage outta Paris City.', '/images/logo_khf.jpg'),
('Pure Niceness Records', 2010, 'Paris', 'France', 'Our main mission is to promote Reggae and dUb music, but we would also like to support bass culture in general - dubstep, drum and bass, jungle, globalbass... - by allowing artists from these scenes to play on a system built for this purpose.
So the first thing we do is organise our own events, playing strictly dubwise style and invinting special guests (other sound systems, singers…) to share the vibes with us. We are also ready to come and nice up your festivals and concerts with our sound system, selections and vibrations.
On the other hand the system is up for hire if you want the required power, bass and sound quality for your party to be a success.', '/images/logo_pureniceness.jpeg'),
('Mental Stamina Records', 2015, 'Paris', 'France', 'Côté label King Hi-Fi Sound System, petit frère de Pure Niceness Records.
Des influences allant de l’Afrika Bambaataa à Jah Shaka', '/images/logo_mental_stamina.jpg');

-- Insertion de données dans la table SOCIAL
INSERT INTO "social" ("name", "url", "label_id")
VALUES
('Facebook', 'https://www.facebook.com/king.hi.fi', 1),
('SoundCloud', 'https://soundcloud.com/kinghifi', 1),
('Youtube', 'https://www.youtube.com/@KingHiFiSoundSystemOfficial/featured', 1),
('Facebook', 'https://www.facebook.com/pure.niceness.records', 2),
('SoundCloud', 'https://soundcloud.com/purenicenessrecords', 2),
('Facebook', 'https://www.facebook.com/mentalstamina', 3),
('SoundCloud', 'https://soundcloud.com/mentalstaminarecords', 3);

-- Insertion de données dans la table USER
INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthdate", "address", "zipcode", "city", "country", "role")
VALUES
('ap@ap.fr', '$2b$10$XTV8HIHZW9whxIhEJlgCO.gcZKZktIHVNOe.8AkeKXs7mdiw3hEja', 'dfgdfg', 'dfgdfg', '1992-01-26', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'admin'),
('u1@u1.fr', '$2b$10$Ap2zBu/SjjgL3.bk3glXZubGCHnEq04UfDDVPlwnV3b9a3qzOKhre', 'dfgdfg', 'dfgdfg', '1992-01-26', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'user'),
('u2@u2.fr', '$2b$10$o8vggPTQbqTMS1vzDPALk.f24v4/BS99a7Vetfk2TwniupWRYxJXK', 'dfgdfg', 'dfgdfg', '1992-01-26', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'user');

-- Insertion de données dans la table EVENT
INSERT INTO "event" ("name", "type", "description", "starting_date", "ending_date", "city", "country", "location", "url_image")
VALUES
('Event 1', 'Festival', 'Description de l''événement 1', '2024-07-01', '2024-07-03', 'Paris', 'France', 'Venue 1', 'https://drive.google.com/thumbnail?id=1Ko-k4AbFGHNipeAe0VZbpRgTnQye5zXA'),
('Event 2', 'Concert', 'Description de l''événement 2', '2024-08-15', '2024-08-15', 'Berlin', 'Allemagne', 'Venue 2', 'https://drive.google.com/thumbnail?id=1BAxXIUGwXcAfl2Laofei27DG4Gf2wOUi'),
('Event 3', 'Exposition', 'Description de l''événement 3', '2024-09-20', '2024-09-25', 'New York', 'USA', 'Venue 3', 'https://drive.google.com/thumbnail?id=1exlS0GwJ1PkWce522h10xdAzJj_aV6JP'),
('Event 4', 'Conférence', 'Description de l''événement 4', '2024-10-10', '2024-10-10', 'London', 'UK', 'Venue 4', 'https://drive.google.com/thumbnail?id=1vVshD7cOAMwrA0HL6NqQm_e1HDBczf2P'),
('Event 5', 'Spectacle', 'Description de l''événement 5', '2024-11-05', '2024-11-06', 'Tokyo', 'Japon', 'Venue 5', 'https://drive.google.com/thumbnail?id=1vYN2tjuYz7nN0kgIlsJTsop0Uoq9Nc45'),
('Event 6', 'Festival', 'Description de l''événement 6', '2024-12-25', '2024-12-31', 'Moscow', 'Russie', 'Venue 6', 'https://drive.google.com/thumbnail?id=1GZ0HUqqHWm1rByKvuKulMzaA2YQsv5E9'),
('Event 7', 'Concert', 'Description de l''événement 7', '2025-01-15', '2025-01-15', 'Sydney', 'Australie', 'Venue 7', 'https://drive.google.com/thumbnail?id=1KMvSQurb-3KqESQsR4VUuaAFDmoRUPcr'),
('Event 8', 'Exposition', 'Description de l''événement 8', '2025-02-20', '2025-02-25', 'Rio de Janeiro', 'Brésil', 'Venue 8', 'https://drive.google.com/thumbnail?id=1iwPg9bQfyfvDj_TXhA3enTPU4ujv7SuF'),
('Event 9', 'Conférence', 'Description de l''événement 9', '2025-03-10', '2025-03-10', 'Cape Town', 'Afrique du Sud', 'Venue 9', 'https://drive.google.com/thumbnail?id=1emWdScE5SjI5Cd0QlLAzpj5GrDvojj-p'),
('Event 10', 'Spectacle', 'Description de l''événement 10', '2025-04-15', '2025-04-16', 'Toronto', 'Canada', 'Venue 10', 'https://drive.google.com/thumbnail?id=1kQYDglL-eNbCByXZueX0agjDMSovi94f');

-- Insertion de données dans la table ALBUM
INSERT INTO "album" ("name", "year", "url_image", "type", "label_id")
VALUES
('Album 1', 2020, 'https://i1.sndcdn.com/artworks-CsCv3OyH62pcGyyD-BHBhRg-t500x500.jpg', 'Studio', 1),
('Album 2', 2018, 'https://i1.sndcdn.com/artworks-f013fIIancUymIB9-W5QQbw-t500x500.jpg', 'Live', 2),
('Album 3', 2017, 'https://i1.sndcdn.com/artworks-pXqzBDk5DrNOfXjJ-4rdJCQ-t500x500.jpg', 'Studio', 3),
('Album 4', 2019, 'https://drive.google.com/thumbnail?id=1ScgehHHpZoa6NBbcCgJqf0NL9w39ahh4', 'Live', 2),
('Album 5', 2015, 'https://drive.google.com/thumbnail?id=1FExziigERVTzfSfnV3M5AJLmVmUSOium', 'Studio', 1),
('Album 6', 2014, 'https://drive.google.com/thumbnail?id=1aX5YzZvQTw5gzzL_mwe4QaoU6_LaWMsR', 'Live', 3),
('Album 7', 2016, 'https://drive.google.com/thumbnail?id=17a-J3DFrQv1BlNqiP4JlOnxrWGvwNjbU', 'Studio', 1),
('Album 8', 2013, 'https://drive.google.com/thumbnail?id=1V85UQdujSfzp_eDWDdDI2F80qfCp9BSw', 'Live', 2),
('Album 9', 2011, 'https://drive.google.com/thumbnail?id=1a7vN8cXPm26s1BwY0gs_lBxl3U0YBWVC', 'Studio', 3),
('Album 10', 2012, 'https://drive.google.com/thumbnail?id=10w6dlGBV-OawgVWgPlitenudSVEH4dAA', 'Live', 1);

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
('Track 1', 2022, 'https://i1.sndcdn.com/artworks-CsCv3OyH62pcGyyD-BHBhRg-t500x500.jpg', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 240, 'Dub', 1),
('Track 2', 2020, 'https://i1.sndcdn.com/artworks-f013fIIancUymIB9-W5QQbw-t500x500.jpg', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 180, 'Dub', 2),
('Track 3', 2023, 'https://i1.sndcdn.com/artworks-pXqzBDk5DrNOfXjJ-4rdJCQ-t500x500.jpg', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 210, 'Dub', 3),
('Track 4', 2019, 'https://drive.google.com/thumbnail?id=110NrlgPXHGHEjRNeh4pcInXJxLfo0n47', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 200, 'Blues', 1),
('Track 5', 2015, 'https://drive.google.com/thumbnail?id=1Au1uXthpr9gsKc-uzQmNc2xZdvsNXTIN', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 220, 'Electronic', 2),
('Track 6', 2014, 'https://drive.google.com/thumbnail?id=1UYNx5jWNapgB0xVgWYxv-XO7wEUv_pZg', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 190, 'Hip-Hop', 3),
('Track 7', 2016, 'https://drive.google.com/thumbnail?id=1LvBuaPEcHsN7WjLmXByU-LS6zcXrz33-', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 250, 'Reggae', 1),
('Track 8', 2013, 'https://drive.google.com/thumbnail?id=17U5dAyPNOzl-gL87WZIVsYNAjE-MKxMJ', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 230, 'R&B', 2),
('Track 9', 2011, 'https://drive.google.com/thumbnail?id=1xyQB7aY_vPiFBdD4uN6o4u1YqQPvvZ-m', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 260, 'Funk', 3),
('Track 10', 2012, 'https://drive.google.com/thumbnail?id=15L32nh8_aMoUj81okWJ8aaeRteJmTLAa', 'https://drive.google.com/thumbnail?id=11hOXNjjbdrbw0t3NjTXY-vo766mBKHm-', 170, 'Soul', 1);

-- Insertion de données dans la table USER_LIKE_TRACK
INSERT INTO "user_like_track" ("user_id", "track_id")
VALUES
(2, 1),
(2, 2),
(3, 4),
(3, 5);

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