-- Verify pureniceness:label_album_function on pg

BEGIN;

SELECT * FROM "labels_with_albums" WHERE FALSE;

SELECT * FROM "labels_with_socials" WHERE FALSE;
ROLLBACK;
