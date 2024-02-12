-- Deploy pureniceness:user_likes to pg

BEGIN;

CREATE FUNCTION "add_like"(json) RETURNS "user_like_track" AS $$
INSERT INTO "user_like_track"
(
"user_id",
"track_id"
) VALUES (
($1->>'user_id')::int,
($1->>'track_id')::int
) RETURNING *
$$ LANGUAGE sql STRICT;

COMMIT;
