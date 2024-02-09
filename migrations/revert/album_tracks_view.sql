-- Revert pureniceness:album_tracks_view from pg

BEGIN;

DROP VIEW IF EXISTS "albums_with_tracks";

COMMIT;
