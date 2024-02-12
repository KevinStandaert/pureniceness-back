-- Revert pureniceness:user_likes from pg

BEGIN;

DROP FUNCTION "add_like";

COMMIT;
