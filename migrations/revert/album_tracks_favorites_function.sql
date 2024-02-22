-- Revert pureniceness:album_tracks_favorites_function from pg

BEGIN;

DROP FUNCTION IF EXISTS "album_with_tracks_with_favorites"(user_id INT);

DROP TYPE IF EXISTS "album_with_tracks";

COMMIT;
