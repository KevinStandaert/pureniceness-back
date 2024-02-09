-- Deploy pureniceness:event_function to pg


BEGIN;

CREATE OR REPLACE FUNCTION "create_event"(data json) RETURNS "event" AS $$

  INSERT INTO "event"
  (
    "name",
    "type",
    "description",
    "starting_date",
    "ending_date",
    "city",
    "country",
    "location",
    "url_image"
  ) VALUES (
    data->>'name',
    data->>'type',
    data->>'description',
    (data->>'starting_date')::timestamptz,
    (data->>'ending_date')::timestamptz,
    data->>'city',
    data->>'country',
    data->>'location',
    data->>'url_image'
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_event"(data json) RETURNS "event" AS $$

  UPDATE "event" SET 
    "name" = COALESCE(data->>'name', "name"),
    "type" = COALESCE(data->>'type', "type"),
    "description" = COALESCE(data->>'description', "description"),
    "starting_date" = COALESCE((data->>'starting_date')::timestamptz, "starting_date"),
    "ending_date" = COALESCE((data->>'ending_date')::timestamptz, "ending_date"),
    "city" = COALESCE(data->>'city', "city"),
    "country" = COALESCE(data->>'country', "country"),
    "location" = COALESCE(data->>'location', "location"),
    "url_image" = COALESCE(data->>'url_image', "url_image"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;

