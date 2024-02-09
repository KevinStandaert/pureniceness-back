-- Verify pureniceness:album_tracks_view on pg

BEGIN;

SELECT * FROM "album_with_tracks" WHERE FALSE;

ROLLBACK;
