-- Verify pureniceness:label_album_function on pg

BEGIN;

SELECT * FROM "labels_with_album" WHERE FALSE;

SELECT * FROM "label_with_social" WHERE FALSE;
ROLLBACK;
