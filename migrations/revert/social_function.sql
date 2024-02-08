-- Revert pureniceness:social_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_social"(json);

DROP FUNCTION IF EXISTS "update_social"(json);

COMMIT;
