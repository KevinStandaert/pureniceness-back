import CoreDatamapper from './core.datamapper.js';
import client from '../helpers/pg.client.js';

export default class TokenDatamapper extends CoreDatamapper {
  static readTableName = 'token';

  static writeTableName = 'token';

  static async deleteByToken(token) {
    const result = await client.query(`DELETE FROM "${this.writeTableName}" WHERE "key" = $1`, [token]);
    return !!result.rowCount;
  }
}
