-- Revert pureniceness:add_artist_to_track from pg

BEGIN;

DROP FUNCTION IF EXISTS "add_artist_to_track"(json);

COMMIT;
