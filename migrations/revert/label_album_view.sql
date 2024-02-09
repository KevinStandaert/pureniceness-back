-- Revert pureniceness:label_album_function from pg

BEGIN;

DROP VIEW IF EXISTS "labels_with_albums";

DROP VIEW IF EXISTS "labels_with_socials";

COMMIT;
