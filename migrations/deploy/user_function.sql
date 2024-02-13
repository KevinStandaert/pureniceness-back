-- Deploy pureniceness:user_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION "create_user"(data json) RETURNS "user" AS $$

  INSERT INTO "user"
  (
    "email", 
    "password",
    "firstname",
    "lastname",
    "birthdate",
    "address", 
    "zipcode", 
    "city",
    "country"
  ) VALUES (
    data->>'email',
    data->>'password',
    data->>'firstname',
    data->>'lastname',
    (data->>'birthdate')::date,
    data->>'address',
    data->>'zipcode',
    data->>'city',
    data->>'country'
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

CREATE OR REPLACE FUNCTION "update_user"(data json) RETURNS "user" AS $$

  UPDATE "user" SET
    "email" = COALESCE(data->>'email', "email"),
    "password" = COALESCE(data->>'password', "password"),
    "firstname" = COALESCE(data->>'firstname', "firstname"),
    "lastname" = COALESCE(data->>'lastname', "lastname"),
    "birthdate" = COALESCE((data->>'birthdate')::date, "birthdate"),
    "address" = COALESCE(data->>'address', "address"),
    "zipcode" = COALESCE(data->>'zipcode', "zipcode"),
    "city" = COALESCE(data->>'city', "city"),
    "country" = COALESCE(data->>'country', "country"),
    "role" = COALESCE(data->>'role', "role"),
    "updated_at" = now()
  WHERE id = (data->>'id')::int
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
