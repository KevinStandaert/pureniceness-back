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
('Event 10', 'Spectacle', 'Description de l''événement 10', '2025-04-15', '2025-04-16', 'Toronto', 'Canada', 'Venue 10', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709310057/Event_10-1709310056916.jpg');

-- Insertion de données dans la table ALBUM
INSERT INTO "album" ("name", "year", "url_image", "type", "label_id")
VALUES
('SERENIDADE', 2023, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236900/Album_1-1709236900172.jpg', 'Studio', 3),
('Album 2', 2018, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709236909/Album_2-1709236906610.jpg', 'Live', 2);

-- Insertion de données dans la table ARTIST
INSERT INTO "artist" ("firstname", "lastname", "nickname", "year", "city", "country", "description", "function", "url_image")
VALUES

('Rodrigo', 'Caçapa', 'Rodrigo Caçapa', 1975, 'Berlin', 'Allemagne', 'Description de l''artiste Rodrigo Caçapa', 'Compositeur', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282636/undefined-1709282636327.jpg'),
('Romain', 'Frécenon', 'Romain Frécenon', 1976, 'Rio de Janeiro', 'Brésil', 'Description de l''artiste Romain Frécenon', 'Compositeur', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282683/undefined-1709282682522.jpg'),
('Aurélien', 'Calvo', 'Aurélien Calvo', 1983, 'Cape Town', 'Afrique du Sud', 'Description de l''artiste Aurélien Calvo', 'Compositeur et violoniste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282688/undefined-1709282688237.png'),
('Corentin', 'Restif', 'Corentin Restif', 1983, 'Cape Town', 'Afrique du Sud', 'Description de l''artiste Corentin Restif', 'Arrangeur et Accordéoniste', 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709282688/undefined-1709282688237.png');

-- Insertion de données dans la table TRACK
INSERT INTO "track" ("name", "year", "url_image", "url_sound", "duration", "style", "album_id")
VALUES
('Baiano - Rojão n°1', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 299, 'Dub tropical', 1),
('Serenidade', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 240, 'Dub tropical', 1),
('Money Money', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 251, 'Dub tropical', 1),
('Pela primavera', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 186, 'Dub tropical', 1),
('Nome da flor', 2022, 'http://res.cloudinary.com/ditqvr8wl/image/upload/v1709237327/Mafia_Matou-1709237326732.jpg', 'https://drive.google.com/thumbnail?id=1Rv8daMBisGrcDJE5bK_U7YYnyUKxakYs', 236, 'Dub tropical', 1);



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