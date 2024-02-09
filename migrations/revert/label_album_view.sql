-- Revert pureniceness:label_album_function from pg

BEGIN;

DROP VIEW IF EXISTS "labels_with_album";

DROP VIEW IF EXISTS "label_with_social";

COMMIT;
