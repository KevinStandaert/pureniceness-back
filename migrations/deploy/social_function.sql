-- Deploy pureniceness:social_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION "create_social"(data json) RETURNS "social" AS $$

  INSERT INTO "social"
  (
    "name", 
    "url",
    "label_id"
  ) VALUES (
    data->>'name',
    data->>'url',
    (data->>'label_id')::int
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_social"(data json) RETURNS "social" AS $$

  UPDATE "social" SET
    "name" = COALESCE(data->>'name', "name"),
    "url" = COALESCE(data->>'url', "url"),
    "label_id" = COALESCE((data->>'label_id')::int, "label_id"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
