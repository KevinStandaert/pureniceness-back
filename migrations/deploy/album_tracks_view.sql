-- Deploy pureniceness:album_tracks_view on pg

BEGIN;

-- create a view "album_with_tracks" that joins the album and track tables
CREATE OR REPLACE VIEW "albums_with_tracks" AS
  SELECT
    "album".*,
    json_agg("track".*) AS "tracks"
  FROM "album"
  LEFT JOIN "track" ON "album".id = "track".album_id
  GROUP BY "album".id;

COMMIT;