-- Revert pureniceness:label_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_label"(json);

DROP FUNCTION IF EXISTS "update_label"(json);

COMMIT;
