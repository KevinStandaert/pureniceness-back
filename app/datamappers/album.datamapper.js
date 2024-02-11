import CoreDatamapper from './core.datamapper.js';

/**
 * @typedef {object} Album
 * @property {integer} id - Album id
 * @property {string} name - Album name
 * @property {integer} year - Album year of creation
 * @property {string} url_image - Album url_image
 * @property {string} type - Album type of music
 * @property {string} created_at - User created_at
 * @property {string} updated_at - User updated_at
 */

import client from '../helpers/pg.client.js';

export default class AlbumDatamapper extends CoreDatamapper {
  static readTableName = 'album';

  static writeTableName = 'album';

  // function to find one album with its tracks using the view "albums_with_tracks"
  static async findOneAlbumWithTracks(id) {
    const result = await client.query('SELECT * FROM "albums_with_tracks" WHERE "id" = $1', [id]);
    return result.rows[0];
  }
}
