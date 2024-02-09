-- Revert pureniceness:album_tracks_view from pg

BEGIN;

DROP VIEW IF EXISTS "album_with_tracks";

COMMIT;
