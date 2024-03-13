import CoreDatamapper from './core.datamapper.js';

import client from '../helpers/pg.client.js';

export default class TrackDatamapper extends CoreDatamapper {
  static readTableName = 'track';

  static writeTableName = 'track';

  // function to find one track with its artists using the view "track_with_artist"
  static async findTrackWithArtists(id) {
    const result = await client.query('SELECT * FROM "track_with_artist" WHERE "id" = $1', [id]);
    return result.rows[0];
  }

  static async findTracksWithArtists() {
    const result = await client.query('SELECT * FROM "track_with_artist"');
    return result.rows;
  }

  static async addLike(userId, trackId) {
    // Check if the user has already liked the track and if exist we delete the like
    const ifExist = await client.query('SELECT * FROM "user_like_track" WHERE user_id = $1 AND track_id = $2', [userId, trackId]);
    if (ifExist.rows.length > 0) {
      const result = await client.query(
        'DELETE FROM "user_like_track" WHERE user_id = $1 AND track_id = $2',
        [
          userId, trackId,
        ],
      );
      return result.rowCount;
    }
    // If the user has not liked the track, we add the like
    const result = await client.query(
      'SELECT * FROM "add_like"($1)',
      [
        { user_id: userId, track_id: trackId },
      ],
    );
    return result.rows[0];
  }

  static async addArtist(data) {
    const ifExist = await client.query('SELECT * FROM "track_has_artist" WHERE "track_id" = $1 AND "artist_id" = $2', [data.track_id, data.artist_id]);
    if (ifExist.rows.length > 0) {
      return false;
    }
    const result = await client.query(
      'SELECT * FROM "add_artist_to_track"($1)',
      [data],
    );
    return result.rows[0];
  }

  static async removeArtist(trackId, artistId) {
    const result = await client.query('DELETE FROM "track_has_artist" WHERE "track_id" = $1 AND "artist_id" = $2', [trackId, artistId]);
    return !!result.rowCount;
  }

  static async orderedArtists(trackId, orderList) {
    // Initialize the SQL update query
    let updateQuery = 'UPDATE "track_has_artist" SET "order" = CASE ';

    // Initialize arrays to hold placeholders and values for the query
    const placeholders = [];
    const values = [];

    // Iterate over the order list to construct placeholders and values
    orderList.forEach((artist, index) => {
      const placeholderIndex = index * 2 + 1;
      placeholders.push(`($${placeholderIndex}, $${placeholderIndex + 1})`);
      values.push(artist.artistId, index);
    });

    // Iterate over the order list to construct the "WHEN" clauses for the SQL update query
    orderList.forEach((artistId, index) => {
      const whenIndex = index * 2 + 1;
      updateQuery += `WHEN "artist_id" = $${whenIndex} AND "track_id" = $${orderList.length * 2 + 1} THEN $${whenIndex + 1} `;
    });

    // Add the "ELSE" and "END" parts of the SQL update query
    updateQuery += 'ELSE "order" END ';

    // Construct the "WHERE" clause for the SQL update query
    updateQuery += `WHERE "track_id" = $${orderList.length * 2 + 1}`;

    // Add the trackId to the values array
    values.push(parseInt(trackId, 10));
    // Example
    // UPDATE track_has_artist
    //  SET "order" = CASE
    //    WHEN artist_id = $1 AND track_id = $7 THEN $2
    //    WHEN artist_id = $3 AND track_id = $7 THEN $4
    //    WHEN artist_id = $5 AND track_id = $7 THEN $6
    //    ELSE "order"
    //  END
    // WHERE track_id = $7;
    // Execute the SQL update query
    const result = await client.query(updateQuery, values);

    // Return true if the update was successful, otherwise false
    return !!result.rowCount;
  }
}
