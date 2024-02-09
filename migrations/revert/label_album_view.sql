-- Revert pureniceness:label_album_function from pg

BEGIN;

DROP VIEW IF EXISTS "label_album";

DROP VIEW IF EXISTS "label_social";

COMMIT;
