-- Revert pureniceness:add_token from pg

BEGIN;

DROP TABLE "token";

COMMIT;
