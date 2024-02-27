-- Deploy pureniceness:label_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION "create_label"(data json) RETURNS "label" AS $$

  INSERT INTO "label"
  (
    "name", 
    "year",
    "city",
    "country",
    "description",
    "url_image"
  ) VALUES (
    data->>'name',
    (data->>'year')::int,
    data->>'city',
    data->>'country',
    data->>'description',
    data->>'url_image'
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_label"(data json) RETURNS "label" AS $$

  UPDATE "label" SET
    "name" = COALESCE(data->>'name', "name"),
    "year" = COALESCE((data->>'year')::int, "year"),
    "city" = COALESCE(data->>'city', "city"),
    "country" = COALESCE(data->>'country', "country"),
    "description" = COALESCE(data->>'description', "description"),
    "url_image" = COALESCE(data->>'url_image', "url_image"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
