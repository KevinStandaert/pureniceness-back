-- Verify pureniceness:add_token on pg

BEGIN;

SELECT * FROM "token" WHERE false;

ROLLBACK;
