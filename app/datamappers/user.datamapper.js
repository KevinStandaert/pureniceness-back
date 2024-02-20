import client from '../helpers/pg.client.js';

/**
 * @typedef {object} User
 * @property {integer} id - User id
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {date} birthdate - User birthdate
 * @property {string} address - User address
 * @property {string} zipcode - User zipcode
 * @property {string} city - User city
 * @property {integer} country - User country
 * @property {string} role - User role
 * @property {string} created_at - User created_at
 * @property {string} updated_at - User updated_at
 */

/**
 * @typedef {object} UserInput
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} passwordConfirm - User confirm password
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {date} birthdate - User birthdate
 * @property {string} address - User address
 * @property {string} zipcode - User zipcode
 * @property {string} city - User city
 * @property {integer} country - User country
 * @property {string} role - User role
 */

import CoreDatamapper from './core.datamapper.js';

export default class UserDatamapper extends CoreDatamapper {
  static readTableName = 'user';

  static writeTableName = 'user';

  static async findByEmail(email) {
    const result = await client.query(`SELECT * FROM "${this.readTableName}" WHERE "email" = $1`, [email]);
    return result.rows[0];
  }

  static async userTracksLiked(id) {
    const result = await client.query(`
    SELECT * FROM "user_link_with_track"
    WHERE
      "user_id" = $1;`, [id]);
    return result.rows;
  }
}
