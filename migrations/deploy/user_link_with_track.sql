-- Deploy pureniceness:user_link_with_track to pg

BEGIN;

CREATE VIEW "user_link_with_track" AS
SELECT
    "user"."id" AS "user_id",
    "track".*,
    "album"."name" AS "album_name",
    "album"."year" AS "album_year",
    "album"."url_image" AS "url_image_album",
    "album"."type" AS "album_type"
FROM
    "user_like_track"
JOIN
    "user" ON "user_like_track"."user_id" = "user"."id"
JOIN
    "track" ON "user_like_track"."track_id" = "track"."id"
JOIN
    "album" ON "track"."album_id" = "album"."id";

COMMIT;
