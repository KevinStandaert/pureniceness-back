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

  static async 
}
