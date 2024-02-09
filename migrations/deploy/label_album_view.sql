-- Deploy pureniceness:label_album_function to pg

BEGIN;
-- create a view "label_album" that joins the label and album tables
CREATE OR REPLACE VIEW "labels_albums" AS
  SELECT
    "label".*,
    json_agg("album".*) AS "albums"
  FROM "label"
  LEFT JOIN "album" ON "label".id = "album".label_id
  GROUP BY "label".id;

-- create a view "label_social" that joins the label and social tables
CREATE OR REPLACE VIEW "label_social" AS
  SELECT
    "label".*,
    json_agg("social".*) AS "socials"
  FROM "label"
  LEFT JOIN "social" ON "label".id = "social".label_id
  GROUP BY "label".id;

COMMIT;
