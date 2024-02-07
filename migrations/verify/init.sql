-- Verify pureniceness:init on pg

BEGIN;

SELECT * FROM "label" WHERE false;

SELECT * FROM "social" WHERE false;

SELECT * FROM "user" WHERE false;

SELECT * FROM "event" WHERE false;

SELECT * FROM "album" WHERE false;

SELECT * FROM "artist" WHERE false;

SELECT * FROM "track" WHERE false;

SELECT * FROM "user_like_track" WHERE false;

SELECT * FROM "track_has_artist" WHERE false;

ROLLBACK;
