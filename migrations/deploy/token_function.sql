-- Deploy pureniceness:token_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION "create_token"(data json) RETURNS "token" AS $$

  INSERT INTO "token"
  (
    "user_id",
    "key",
    "expires_at"
  ) VALUES (
    (data->>'user_id')::int,
    data->>'key',
    (data->>'expires_at')::timestamptz
  )
  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
