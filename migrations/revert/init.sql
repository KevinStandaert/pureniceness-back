-- Revert pureniceness:init from pg

BEGIN;

DROP TABLE "track_has_artist", "user_like_track", "track", "artist", "album", "event", "user", "social", "label";

COMMIT;
