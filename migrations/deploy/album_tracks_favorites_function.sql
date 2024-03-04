-- Deploy pureniceness:album_tracks_favorites_function from pg

BEGIN;

-- Création du type album_with_tracks_with_favorites
CREATE TYPE "album_with_tracks" AS (
    "id" INT,
    "name" TEXT,
    "year" INT,
    "url_image" TEXT,
    "type" TEXT,
    "label_id" INT,
    "role" INT,
    "created_at" TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ,
    "tracks" JSONB
);

-- Création de la fonction album_with_tracks_with_favorites
CREATE OR REPLACE FUNCTION "album_with_tracks_with_favorites"(INT) RETURNS SETOF "album_with_tracks" AS $$
  SELECT
    "album".*,
    COALESCE(json_agg(track_data), '[]'::json) AS "tracks"
FROM
    "album"
LEFT JOIN LATERAL (
    SELECT json_build_object(
        'id', "track"."id",
        'name', "track"."name",
        'year', "track"."year",
        'url_image', "track"."url_image",
        'url_sound', "track"."url_sound",
        'listening', "track"."listening",
        'duration', "track"."duration",
        'style', "track"."style",
        'album_id', "track"."album_id",
        'created_at', "track"."created_at",
        'updated_at', "track"."updated_at",
        'liked', EXISTS (SELECT 1 FROM "user_link_with_track" WHERE "user_id" = $1 AND "id" = "track"."id")
    ) AS track_data
    FROM "track"
    WHERE "album"."id" = "track"."album_id"
) AS track_data ON TRUE
GROUP BY
    "album"."id";

$$ LANGUAGE SQL STRICT;
COMMIT;
