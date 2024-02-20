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

  static async userAlbumInfosForTracksLiked(id) {
    const result = await client.query(`
    SELECT DISTINCT ON (track."album_id") album.*
    FROM "user_like_track" AS user_like
    JOIN "track" ON user_like."track_id" = track."id"
    JOIN "album" ON track."album_id" = album."id"
    WHERE user_like."user_id" = $1;
    `, [id]);
    return result.rows;
  }

  static async userTracksLiked(id) {
    const result = await client.query(`
    SELECT
      "user"."id" AS "user_id",
      "track".*,
      "album"."id" AS "album_id",
      "album"."name" AS "album_name",
      "album"."year" AS "album_year",
      "album"."url_image" AS "url_image_album",
      "album"."type" AS "type_album"
    FROM
      "user_like_track"
    JOIN
      "user" ON "user_like_track"."user_id" = "user"."id"
    JOIN
      "track" ON "user_like_track"."track_id" = "track"."id"
    JOIN
      "album" ON "track"."album_id" = "album"."id"
    WHERE
      "user"."id" = $1`, [id]);
    return result.rows;
  }
}
