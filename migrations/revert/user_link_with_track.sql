-- Revert pureniceness:user_link_with_track from pg

BEGIN;

DROP VIEW IF EXISTS "user_link_with_track";

COMMIT;
