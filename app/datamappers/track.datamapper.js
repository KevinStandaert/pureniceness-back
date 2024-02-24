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
    const ifExist = await client.query('SELECT * FROM "track_has_artist" WHERE track_id = $1 AND artist_id = $2', [data.track_id, data.artist_id]);
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
    const result = await client.query('DELETE FROM "track_has_artist" WHERE track_id = $1 AND artist_id = $2', [trackId, artistId]);
    return !!result.rowCount;
  }
}
