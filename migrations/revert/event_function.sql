-- Revert pureniceness:event_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "create_event"(json);

DROP FUNCTION IF EXISTS "update_event"(json);

COMMIT;
