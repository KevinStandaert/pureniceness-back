-- Revert pureniceness:user_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_user"(json);

DROP FUNCTION IF EXISTS "update_user"(json);

COMMIT;
