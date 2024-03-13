BEGIN;

-- Insertion de données dans la table LABEL
INSERT INTO "label" ("name", "year", "city", "country", "description", "url_image")
VALUES
('King Hi-Fi Sound System', 2010, 'Lyon', 'France', 
'L’histoire commence en 2006 lorsque dOpeShack et Keryo partagent en plus de leur amitié une véritable passion pour la musique jamaïcaine. 
Ils décident naturellement de mettre leurs connaissances et bacs de vinyls en commun pour former leur propre sound en 2010, le King Hi-Fi.

Construit artisanalement dans la tradition des Sound System Jamaïcains, le Sound System subira plusieurs évolutions pour proposer une écoute toujours plus qualitative et une expérience toujours immersive.
Au fil des années et des collaborations, l’identité musicale du sound s’affirmera à travers des sélections Bass Music rendant hommage à toutes les facettes du reggae au sens large, depuis le Roots des années 70 au stepper guerrier et cosmique des années 3000, et particulièrement au UK Stepper et au Reggae Digital des 80’s.

Le crew prend rapidement de l’ampleur avec l’arrivée des MC’s du KPC krew ( Cookah & Likkle Ferguson ) et de la Mystik Mountain Family (Teuteu, Vinz, DubToine, Moko, Kayass) comme nouveaux engineers, boxmen, selectors... et réunis aujourd’hui sous la bannière de la King Hi-Fi Family.'
, '/images/logo_khf.jpg'),
('Pure Niceness Records', 2014, 'Lyon', 'France', 
'Fort des remontres avec des MCs et RiddimMakers avec qui ils ont partagé des danses, le sound lance son propre label en 2014, Pure Niceness Records, destiné à promouvoir artistes et producteurs émergeants de la scène Sound System internationale.
L’identité du label est claire : des vibes Reggae Digital et Heavy Stepper
Le label compte déjà plusieurs sorties vinyles et digital à son actif, avec des producteurs comme Danny T & Tradesman (UK), Iron Dubz (Genève), Bim One (Japon), Echo Roots (Suède) et des chanteurs internationaux comme Mr Williamz, Michael Prophet, Pad Anthony, Troy Berkley, Jah Screechy, Lasai ou Peppery.
En construction, des projets avec Dub Machinist, Raggattack Bony Fly ou Brainless à la production et des artistes comme Michael Prophet, Echo Minott, Asher Senator ou Peter Youthman au micro.', 
'/images/logo_pureniceness.jpeg'),
('Mental Stamina Records', 2015, 'Paris', 'France', 
'Côté label King Hi-Fi Sound System, petit frère de Pure Niceness Records.
Des influences allant de l’Afrika Bambaataa à Jah Shaka', 
'/images/logo_mental_stamina.jpg');

-- Insertion de données dans la table SOCIAL
INSERT INTO "social" ("name", "url", "label_id")
VALUES
('Facebook', 'https://www.facebook.com/king.hi.fi', 1),
('SoundCloud', 'https://soundcloud.com/kinghifi', 1),
('Youtube', 'https://www.youtube.com/@KingHiFiSoundSystemOfficial/featured', 1),
('Facebook', 'https://www.facebook.com/pure.niceness.records', 2),
('SoundCloud', 'https://soundcloud.com/purenicenessrecords', 2),
('Bandcamp', 'https://pureniceness.bandcamp.com', 2),
('Facebook', 'https://www.facebook.com/mentalstamina', 3),
('SoundCloud', 'https://soundcloud.com/mentalstaminarecords', 3),
('Bandcamp', 'https://mentalstaminarecords.bandcamp.com', 3);

-- Insertion de données dans la table USER
INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthdate", "address", "zipcode", "city", "country", "role")
VALUES
('ap@ap.fr', '$2b$10$XTV8HIHZW9whxIhEJlgCO.gcZKZktIHVNOe.8AkeKXs7mdiw3hEja', 'admin', 'principal', '1985-01-26', 'ma maison', '01000', 'ma ville', 'mon pays', 'admin'),
('u1@u1.fr', '$2b$10$Ap2zBu/SjjgL3.bk3glXZubGCHnEq04UfDDVPlwnV3b9a3qzOKhre', 'robert', 'dupond', '1950-05-05', '6 rue de la route', '91480', 'varennes-jarcy', 'france', 'user'),
('u2@u2.fr', '$2b$10$o8vggPTQbqTMS1vzDPALk.f24v4/BS99a7Vetfk2TwniupWRYxJXK', 'juliette', 'lepetit', '2000-12-25', '15 route de la grande rue', '60250', 'balagny-sur-thérain', 'france', 'user');

-- Insertion de données dans la table EVENT
INSERT INTO "event" ("name", "type", "description", "starting_date", "ending_date", "city", "country", "location", "url_image")
VALUES
('Event 1', 'Festival', 'Description de l''événement 1', '2024-07-01', '2024-07-03', 'Paris', 'France', 'Venue 1', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236995/Event_1-1709236993854.jpg'),
('Event 2', 'Concert', 'Description de l''événement 2', '2024-08-15', '2024-08-15', 'Berlin', 'Allemagne', 'Venue 2', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237011/Event_2-1709237010173.jpg'),
('Event 3', 'Exposition', 'Description de l''événement 3', '2024-09-20', '2024-09-25', 'New York', 'USA', 'Venue 3', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237023/Event_3-1709237022471.jpg'),
('Event 4', 'Conférence', 'Description de l''événement 4', '2024-10-10', '2024-10-10', 'London', 'UK', 'Venue 4', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237037/Event_4-1709237036580.jpg'),
('Event 5', 'Spectacle', 'Description de l''événement 5', '2024-11-05', '2024-11-06', 'Tokyo', 'Japon', 'Venue 5', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237050/Event_5-1709237050014.jpg'),
('Event 6', 'Festival', 'Description de l''événement 6', '2024-12-25', '2024-12-31', 'Moscow', 'Russie', 'Venue 6', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237066/Event_6-1709237065689.jpg'),
('Event 7', 'Concert', 'Description de l''événement 7', '2025-01-15', '2025-01-15', 'Sydney', 'Australie', 'Venue 7', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237083/Event_7-1709237082583.jpg'),
('Event 8', 'Exposition', 'Description de l''événement 8', '2025-02-20', '2025-02-25', 'Rio de Janeiro', 'Brésil', 'Venue 8', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237095/Event_8-1709237094066.jpg'),
('Event 9', 'Conférence', 'Description de l''événement 9', '2025-03-10', '2025-03-10', 'Cape Town', 'Afrique du Sud', 'Venue 9', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237106/Event_9-1709237106053.jpg'),
('Event 10', 'Spectacle', 'Description de l''événement 10', '2025-04-15', '2025-04-16', 'Toronto', 'Canada', 'Venue 10', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709310057/Event_10-1709310056916.jpg');

-- Insertion de données dans la table ALBUM
INSERT INTO "album" ("name", "year", "url_image", "type", "label_id")
VALUES
('Album 1', 2020, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236900/Album_1-1709236900172.jpg', 'Studio', 1),
('Album 2', 2018, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236909/Album_2-1709236906610.jpg', 'Live', 2),
('Album 3', 2017, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236916/Album_3-1709236915613.jpg', 'Studio', 3),
('Album 4', 2019, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236924/Album_4-1709236923392.jpg', 'Live', 2),
('Album 5', 2015, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236931/Album_5-1709236930580.jpg', 'Studio', 1),
('Album 6', 2014, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236940/Album_6-1709236939411.jpg', 'Live', 3),
('Album 7', 2016, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236948/Album_7-1709236947947.jpg', 'Studio', 1),
('Album 8', 2013, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237398/Album_8-1709237397784.jpg', 'Live', 2),
('Album 9', 2011, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236962/Album_9-1709236962523.jpg', 'Studio', 3),
('Album 10', 2012, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236970/Album_10-1709236969698.jpg', 'Live', 1);

-- Insertion de données dans la table ARTIST
INSERT INTO "artist" ("firstname", "lastname", "nickname", "year", "city", "country", "description", "function", "url_image")
VALUES
('Alice', 'Jones', 'AJ', 1980, 'Paris', 'France', 'Description de l''artiste Alice Jones', 'Chanteuse', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282484/undefined-1709282482628.jpg'),
('Bob', 'Smith', 'BS', 1975, 'Berlin', 'Allemagne', 'Description de l''artiste Bob Smith', 'Guitariste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282636/undefined-1709282636327.jpg'),
('Charlie', 'Brown', 'CB', 1988, 'New York', 'USA', 'Description de l''artiste Charlie Brown', 'Bassiste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282643/undefined-1709282643515.jpg'),
('Diana', 'Clark', 'DC', 1972, 'London', 'UK', 'Description de l''artiste Diana Clark', 'Batteuse', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282655/undefined-1709282655282.jpg'),
('Eric', 'Adams', 'EA', 1985, 'Tokyo', 'Japon', 'Description de l''artiste Eric Adams', 'Claviériste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282662/undefined-1709282662520.jpg'),
('Fiona', 'Garcia', 'FG', 1982, 'Moscow', 'Russie', 'Description de l''artiste Fiona Garcia', 'Violoniste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282670/undefined-1709282670187.jpg'),
('George', 'Harris', 'GH', 1979, 'Sydney', 'Australie', 'Description de l''artiste George Harris', 'Trompettiste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282676/undefined-1709282676520.jpg'),
('Helen', 'Lopez', 'HL', 1976, 'Rio de Janeiro', 'Brésil', 'Description de l''artiste Helen Lopez', 'Saxophoniste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282683/undefined-1709282682522.jpg'),
('Ian', 'Martin', 'IM', 1983, 'Cape Town', 'Afrique du Sud', 'Description de l''artiste Ian Martin', 'Pianiste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282688/undefined-1709282688237.png'),
('Jack', 'Taylor', 'JT', 1987, 'Toronto', 'Canada', 'Description de l''artiste Jack Taylor', 'Choriste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282694/undefined-1709282694347.jpg');

-- Insertion de données dans la table TRACK
INSERT INTO "track" ("name", "year", "url_image", "url_sound", "duration", "style", "album_id")
VALUES
('Mafia Matou', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 240, 'Dub', 1),
('Serenidae', 2020, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237240/Serenidae-1709237239154.jpg', 'https://drive.google.com/thumbnail?id=1dc8GuZ3K4KhfSrih-Sz-8Nnt-iRPJGKX', 180, 'Dub', 2),
('Again working', 2023, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237272/Again_working-1709237271659.jpg', 'https://drive.google.com/thumbnail?id=1u1YG10oRgGGRoG10VaE7iDg0zgBgryk3', 210, 'Dub', 3),
('My sound a come', 2019, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237172/My_sound_a_come-1709237171371.jpg', 'https://drive.google.com/thumbnail?id=1WirQhW6Y6VBbYfeo8OYhncnzAETFHWOF', 200, 'Blues', 1),
('Walk & shank', 2015, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237203/Walk_shank-1709237202457.jpg', 'https://drive.google.com/thumbnail?id=13fD5dcAHOksEIR_97NNeyDaNKTMVNoyk', 220, 'Electronic', 2),
('Tick tick', 2014, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237256/Tick_tick-1709237255998.jpg', 'https://drive.google.com/thumbnail?id=13IQWHGr0g8Ddk7P84LqUUfELObAzGwCw', 190, 'Hip-Hop', 3),
('Finyl', 2016, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237187/Finyl-1709237186640.jpg', 'https://drive.google.com/thumbnail?id=1dncHIk-KLX2OqL9rJjA3K48p-gqwmaUq', 250, 'Reggae', 1),
('Futatabi', 2013, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237250/Futatabi-1709237249661.jpg', 'https://drive.google.com/thumbnail?id=1F3tLq0_LHdJbjgvkXNLArWNzGl8uwTS-', 230, 'R&B', 2),
('Nome da flor', 2011, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237263/Nome_da_flor-1709237261978.jpg', 'https://drive.google.com/thumbnail?id=1VnlCjQwkU5f6B2F7t6FI6PqtiVUMDW8i', 260, 'Funk', 3),
('Pela primeva', 2012, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237192/Pela_primeva-1709237192249.jpg', 'https://drive.google.com/thumbnail?id=1BZXbmZRTYaYbB8YidFwrzaQR6kbMiPQK', 170, 'Soul', 1);

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