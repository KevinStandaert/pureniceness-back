import CoreDatamapper from './core.datamapper.js';
import client from '../helpers/pg.client.js';

/**
 * @typedef {object} Event
 * @property {integer} id - Event id
 * @property {string} name - Event name
 * @property {string} type - Event type
 * @property {string} description - Event description
 * @property {string} starting_date - Event starting_date
 * @property {string} ending_date - Event ending_date
 * @property {string} city - Event city
 * @property {string} country - Event country
 * @property {string} url_image - Event url_image
 * @property {string} created_at - User created_at
 * @property {string} updated_at - User updated_at
 */

export default class EventDatamapper extends CoreDatamapper {
  static readTableName = 'event';

  static writeTableName = 'event';

  static async findAll() {
    const result = await client.query(`SELECT * FROM "${this.readTableName}" ORDER BY "starting_date" ASC`);
   
    return result.rows;
  }
}
