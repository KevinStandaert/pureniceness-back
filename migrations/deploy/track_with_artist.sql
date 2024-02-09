-- Deploy pureniceness:track_with_artist to pg

BEGIN;

CREATE VIEW "track_with_artist" AS
SELECT 
"track".*,
"artist"."nickname",
"artist"."firstname",
"artist"."lastname"
FROM "track_has_artist"
JOIN "track"
ON
"track_has_artist"."track_id" = "track"."id"
JOIN "artist"
ON
"track_has_artist"."artist_id" = "artist"."id";

COMMIT;
