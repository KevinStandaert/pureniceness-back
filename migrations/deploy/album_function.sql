-- Deploy pureniceness:album_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION "create_album"(data json) RETURNS "album" AS $$

  INSERT INTO "album"
  (
    "name",
    "year",
    "url_image",
    "type",
    "label_id"
  ) VALUES (
    data->>'name',
    (data->>'year')::int,
    data->>'url_image',
    data->>'type',
    (data->>'label_id')::int
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_album"(data json) RETURNS "album" AS $$

  UPDATE "album" SET 
    "name" = COALESCE(data->>'name', "name"),
    "year" = COALESCE((data->>'year')::int, "year"),
    "url_image" = COALESCE(data->>'url_image', "url_image"),
    "type" = COALESCE(data->>'type', "type"),
    "label_id" = COALESCE((data->>'label_id')::int, "label_id"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
