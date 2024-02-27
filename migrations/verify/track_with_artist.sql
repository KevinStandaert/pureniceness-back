-- Verify pureniceness:track_with_artist on pg

BEGIN;

SELECT * FROM "track_with_artist" WHERE false;

ROLLBACK;
