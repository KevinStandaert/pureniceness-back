-- Deploy pureniceness:artist_function to pg

BEGIN;


CREATE OR REPLACE FUNCTION "create_artist"(data json) RETURNS "artist" AS $$

  INSERT INTO "artist"
  (
    "firstname",
    "lastname",
    "nickname",
    "year",
    "city",
    "country",
    "description",
    "function",
    "url_image"
  ) VALUES (
    data->>'firstname',
    data->>'lastname',
    data->>'nickname',
    (data->>'year')::int,
    data->>'city',
    data->>'country',
    data->>'description',
    data->>'function',
    data->>'url_image'
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_artist"(data json) RETURNS "artist" AS $$

  UPDATE "artist" SET
    "firstname" = COALESCE(data->>'firstname', "firstname"),
    "lastname" = COALESCE(data->>'lastname', "lastname"),
    "nickname" = COALESCE(data->>'nickname', "nickname"),
    "year" = COALESCE((data->>'year')::int, "year"),
    "city" = COALESCE(data->>'city', "city"),
    "country" = COALESCE(data->>'country', "country"),
    "description" = COALESCE(data->>'description', "description"),
    "function" = COALESCE(data->>'function', "function"),
    "url_image" = COALESCE(data->>'url_image', "url_image"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
