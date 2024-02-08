-- Revert pureniceness:artist_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_artist"(json);

DROP FUNCTION IF EXISTS "update_artist"(json);

COMMIT;
