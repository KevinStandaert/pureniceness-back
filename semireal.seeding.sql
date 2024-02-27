BEGIN;

-- Insertion de données dans la table LABEL
INSERT INTO "label" ("name", "year", "city", "country", "description", "url_image")
VALUES
('King Hi-Fi Sound System', 2010, 'Lyon', 'France', 'L\'histoire commence en 2006 lorsque dOpeShack et Keryo partagent en plus de leur amitié une
véritable passion pour la musique jamaïcaine. Ils décident naturellement de mettre leurs

connaissances et bacs de vinyls en commun pour former leur propre sound en 2010, le King Hi-
Fi.

Construit artisanalement dans la tradition des Sound System Jamaïcains, le Sound System
subira plusieurs évolutions pour proposer une écoute toujours plus qualitative et une expérience
toujours immersive.
Au fil des années et des collaborations, l\'identité musicale du sound s\'affirmera à travers des
sélections Bass Music rendant hommage à toutes les facettes du reggae au sens large, depuis
le Roots des années 70 au stepper guerrier et cosmique des années 3000, et particulièrement
au UK Stepper et au Reggae Digital des 80\'s.
Le crew prend rapidement de l\'ampleur avec l\'arrivée des MC\'s du KPC krew ( Cookah & Likkle
Ferguson ) et de la Mystik Mountain Family (Teuteu, Vinz, DubToine, Moko, Kayass) comme
nouveaux engineers, boxmen, selectors... et réunis aujourd\'hui sous la bannière de la King Hi-Fi
Family.', '/images/logo_khf.jpg'),
('Pure Niceness Records', 2014, ' ', 'France', 'Fort des remontres avec des MCs et RiddimMakers avec qui ils ont partagé des danses, le
sound lance son propre label en 2014, Pure Niceness Records, destiné à promouvoir artistes et
producteurs émergeants de la scène Sound System internationale.
L’identité du label est claire : des vibes Reggae Digital et Heavy Stepper
Le label compte déjà plusieurs sorties vinyles et digital à son actif, avec des producteurs comme
Danny T & Tradesman (UK), Iron Dubz (Genève), Bim One (Japon), Echo Roots (Suède) et des
chanteurs internationaux comme Mr Williamz, Michael Prophet, Pad Anthony, Troy Berkley, Jah
Screechy, Lasai ou Peppery.
En construction, des projets avec Dub Machinist, Raggattack Bony Fly ou Brainless à la
production et des artistes comme Michael Prophet, Echo Minott, Asher Senator ou Peter
Youthman au micro.', '/images/logo_pureniceness.jpeg'),
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
('Facebook', 'https://www.facebook.com/king.hi.fi', 3),
('SoundCloud', 'https://soundcloud.com/kinghifi', 3);

-- Insertion de données dans la table USER
INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthdate", "address", "zipcode", "city", "country", "role")
VALUES
('ap@ap.fr', '$2b$10$XTV8HIHZW9whxIhEJlgCO.gcZKZktIHVNOe.8AkeKXs7mdiw3hEja', 'admin', 'principal', '1985-01-26', 'ma maison', '01000', 'ma ville', 'mon pays', 'admin'),
('u1@u1.fr', '$2b$10$Ap2zBu/SjjgL3.bk3glXZubGCHnEq04UfDDVPlwnV3b9a3qzOKhre', 'robert', 'dupond', '1950-05-05', '6 rue de la route', '91480', 'varennes-jarcy', 'france', 'user'),
('u2@u2.fr', '$2b$10$o8vggPTQbqTMS1vzDPALk.f24v4/BS99a7Vetfk2TwniupWRYxJXK', 'juliette', 'lepetit', '2000-12-25', '15 route de la grande rue', '60250', 'balagny-sur-thérain', 'france', 'user');

-- Insertion de données dans la table EVENT
INSERT INTO "event" ("name", "type", "description", "starting_date", "ending_date", "city", "country", "location", "url_image")
VALUES
('Event 1', 'Festival', 'Description de l''événement 1', '2024-07-01', '2024-07-03', 'Paris', 'France', 'Venue 1', 'url_image_event_1'),
('Event 2', 'Concert', 'Description de l''événement 2', '2024-08-15', '2024-08-15', 'Berlin', 'Allemagne', 'Venue 2', 'url_image_event_2'),
('Event 3', 'Exposition', 'Description de l''événement 3', '2024-09-20', '2024-09-25', 'New York', 'USA', 'Venue 3', 'url_image_event_3'),
('Event 4', 'Conférence', 'Description de l''événement 4', '2024-10-10', '2024-10-10', 'London', 'UK', 'Venue 4', 'url_image_event_4'),
('Event 5', 'Spectacle', 'Description de l''événement 5', '2024-11-05', '2024-11-06', 'Tokyo', 'Japon', 'Venue 5', 'url_image_event_5');

-- Insertion de données dans la table ALBUM
INSERT INTO "album" ("name", "year", "url_image", "type", "label_id")
VALUES
('Album 1', 2020, 'url_image_album_1', 'Studio', 2),
('Album 2', 2018, 'url_image_album_2', 'Live', 2),
('Album 3', 2017, 'url_image_album_3', 'Studio', 3),
('Album 4', 2019, 'url_image_album_4', 'Live', 2),
('Album 5', 2015, 'url_image_album_5', 'Studio', 2),
('Album 6', 2014, 'url_image_album_6', 'Live', 3);

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