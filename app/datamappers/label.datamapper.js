import client from '../helpers/pg.client.js';

/**
 * @typedef {object} Label
 * @property {integer} id - Label id
 * @property {string} name - Label name
 * @property {integer} year - Label year of creation
 * @property {string} city - Label city
 * @property {string} country - Label country
 * @property {string} description - Label description
 * @property {string} url_image - Label url_image
 * @property {string} created_at - User created_at
 * @property {string} updated_at - User updated_at
 */

import CoreDatamapper from './core.datamapper.js';

export default class LabelDatamapper extends CoreDatamapper {
  static readTableName = 'label';

  static writeTableName = 'label';

  // Function to find all labels with all their albums using the view "labels_with_albums"
  static async findAllLabelsWithAlbums() {
    const result = await client.query('SELECT * FROM "labels_with_albums"');
    return result.rows;
  }

  // Function to find one label with its albums using the view "labels_with_albums"
  static async findOneLabelWithAlbums(id) {
    const result = await client.query('SELECT * FROM "labels_with_albums" WHERE "id" = $1', [id]);
    return result.rows;
  }
}
