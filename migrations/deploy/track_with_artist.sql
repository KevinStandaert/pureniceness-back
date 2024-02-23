-- Deploy pureniceness:track_with_artist to pg

BEGIN;

CREATE VIEW "track_with_artist" AS
 SELECT 
    "track".*,
    CASE 
        WHEN "track_has_artist"."track_id" IS NULL THEN '[]'::json
        ELSE json_agg(json_build_object(
            'id', "artist"."id",
            'firstname', "artist"."firstname",
            'lastname', "artist"."lastname",
            'nickname', "artist"."nickname",
            'year', "artist"."year",
            'city', "artist"."city",
            'country', "artist"."country",
            'description', "artist"."description",
            'function', "artist"."function",
            'url_image', "artist"."url_image",
            'role', "track_has_artist"."role",
            'order', "track_has_artist"."order"
        ))
    END AS "artists"
FROM "track"
LEFT JOIN "track_has_artist" ON "track"."id" = "track_has_artist"."track_id"
LEFT JOIN "artist" ON "track_has_artist"."artist_id" = "artist"."id"
GROUP BY "track"."id",  "track_has_artist"."track_id";

COMMIT;
