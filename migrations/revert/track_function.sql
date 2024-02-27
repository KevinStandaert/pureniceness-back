-- Revert pureniceness:track_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "update_track"(json);

DROP FUNCTION IF EXISTS "create_track"(json);

COMMIT;
