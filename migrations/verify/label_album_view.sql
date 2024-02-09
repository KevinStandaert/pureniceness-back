-- Verify pureniceness:label_album_function on pg

BEGIN;

SELECT * FROM label_album WHERE FALSE;

SELECT * FROM label_social WHERE FALSE;
ROLLBACK;
