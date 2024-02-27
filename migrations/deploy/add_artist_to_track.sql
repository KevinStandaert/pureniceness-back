-- Deploy pureniceness:add_artist_to_track to pg

BEGIN;

CREATE FUNCTION "add_artist_to_track"(data json) RETURNS "track_has_artist" AS $$

INSERT INTO "track_has_artist"
(
"track_id",
"artist_id",
"role",
"order"
) VALUES (
(data->>'track_id')::int,
(data->>'artist_id')::int,
data->>'role',
(data->>'order')::int
) RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
