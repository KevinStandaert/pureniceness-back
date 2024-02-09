-- Deploy pureniceness:user_link_with_track to pg

BEGIN;

CREATE VIEW "user_link_with_track" AS
SELECT 
"user"."id" AS "user_id",
"track".*
FROM "user_like_track"
JOIN "user"
ON
"user_like_track"."user_id" = "user"."id"
JOIN "track"
ON
"user_like_track"."track_id" = "track"."id";

COMMIT;
