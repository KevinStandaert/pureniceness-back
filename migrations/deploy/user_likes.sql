-- Deploy pureniceness:user_likes to pg

BEGIN;

CREATE FUNCTION "add_like"(data json) RETURNS "user_like_track" AS $$

INSERT INTO "user_like_track"
(
"user_id",
"track_id"
) VALUES (
(data->>'user_id')::int,
(data->>'track_id')::int
) RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
