-- Deploy pureniceness:add_token to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "token" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "key" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "expires_at" timestamptz NOT NULL
);

COMMIT;
