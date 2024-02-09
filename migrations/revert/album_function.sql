-- Revert pureniceness:album_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "update_album"(json);

DROP FUNCTION IF EXISTS "create_album"(json);

COMMIT;
