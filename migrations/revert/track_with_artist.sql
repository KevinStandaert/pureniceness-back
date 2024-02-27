-- Revert pureniceness:track_with_artist from pg

BEGIN;

DROP VIEW IF EXISTS "track_with_artist";

COMMIT;
