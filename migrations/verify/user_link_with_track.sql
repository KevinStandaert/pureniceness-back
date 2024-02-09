-- Verify pureniceness:user_link_with_track on pg

BEGIN;

SELECT * FROM "user_link_with_track" WHERE false;

ROLLBACK;
