-- Revert pureniceness:track_with_artist from pg

BEGIN;

DROP VIEW "track_with_artist";

COMMIT;
