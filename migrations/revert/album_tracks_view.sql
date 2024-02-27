-- Revert pureniceness:album_tracks_view on pg

BEGIN;

DROP VIEW IF EXISTS "albums_with_tracks";

COMMIT;
