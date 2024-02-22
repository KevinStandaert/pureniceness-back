-- Revert pureniceness:user_likes from pg

BEGIN;

DROP FUNCTION IF EXISTS "add_like";

COMMIT;
