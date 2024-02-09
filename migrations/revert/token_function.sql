-- Revert pureniceness:token_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_token"(json);

COMMIT;
