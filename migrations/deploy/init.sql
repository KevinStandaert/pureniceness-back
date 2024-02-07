-- Deploy pureniceness:init to pg

BEGIN;

-- Table LABEL
CREATE TABLE "label" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url_image" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Table SOCIAL
CREATE TABLE "social" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "label_id" INT NOT NULL REFERENCES "label"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Table USER
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT UNIQUE NOT NULL CHECK("email" ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'),
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "address" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Table EVENT
CREATE TABLE "event" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "starting_date" timestamptz NOT NULL,
    "ending_date" timestamptz NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "url_img" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Table ALBUM
CREATE TABLE "album" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INT NOT NULL,
    "url_img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "label_id" int NOT NULL REFERENCES "label"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Table ARTIST
CREATE TABLE "artist" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "year" INT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "url_img" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


-- Table TRACK
CREATE TABLE "track" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INT NOT NULL,
    "url_img" TEXT NOT NULL,
    "url_sound" TEXT NOT NULL,
    "listening" INT NOT NULL DEFAULT 0,
    "duration" INT NOT NULL,
    "style" TEXT NOT NULL DEFAULT 'dub',
    "album_id" INT NOT NULL REFERENCES "album"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


-- Link table between USER and TRACK
CREATE TABLE "user_like_track" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "track_id" INT NOT NULL REFERENCES "track"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

-- Link table between TRACK and ARTIST
CREATE TABLE "track_has_artist" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "track_id" INT NOT NULL REFERENCES "track"("id"),
    "artist_id" INT NOT NULL REFERENCES "artist"("id"),
    "role" TEXT NOT NULL,
    "order" INT NOT NULL DEFAULT 0,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


COMMIT;