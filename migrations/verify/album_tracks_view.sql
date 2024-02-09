-- Verify pureniceness:album_tracks_view on pg

BEGIN;

SELECT * FROM "albums_with_tracks" WHERE FALSE;

ROLLBACK;
