-- Deploy pureniceness:track_with_artist to pg

BEGIN;

CREATE VIEW "track_with_artist" AS
SELECT 
"track".*,
json_agg("artist".*) AS "artist"
FROM "track_has_artist"
JOIN "track"
ON
"track_has_artist"."track_id" = "track"."id"
JOIN "artist"
ON
"track_has_artist"."artist_id" = "artist"."id"
GROUP BY "track"."id";

COMMIT;
