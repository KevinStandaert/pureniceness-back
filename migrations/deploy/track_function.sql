-- Deploy pureniceness:track_function to pg


BEGIN;

CREATE OR REPLACE FUNCTION "create_track"(data json) RETURNS "track" AS $$

  INSERT INTO "track"
  (
    "name",
    "year",
    "url_image",
    "url_sound",
    "listening",
    "duration",
    "style",
    "album_id"
  ) VALUES (
    data->>'name',
    (data->>'year')::int,
    data->>'url_image',
    data->>'url_sound',
    (data->>'listening')::int,
    (data->>'duration')::int,
    data->>'style',
    (data->>'album_id')::int
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_track"(data json) RETURNS "track" AS $$

  UPDATE "track" SET 
    "name" = COALESCE(data->>'name', "name"),
    "year" = COALESCE((data->>'year')::int, "year"),
    "url_image" = COALESCE(data->>'url_image', "url_image"),
    "url_sound" = COALESCE(data->>'url_sound', "url_sound"),
    "listening" = COALESCE((data->>'listening')::int, "listening"),
    "duration" = COALESCE((data->>'duration')::int, "duration"),
    "style" = COALESCE(data->>'style', "style"),
    "album_id" = COALESCE((data->>'album_id')::int, "album_id"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
