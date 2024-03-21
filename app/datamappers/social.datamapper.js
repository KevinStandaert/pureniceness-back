import CoreDatamapper from './core.datamapper.js';

export default class SocialDatamapper extends CoreDatamapper {
  static readTableName = 'social';

  static writeTableName = 'social';

  static async findAll() {
    const result = await client.query(`SELECT * FROM "${this.readTableName}"`);
    
    return result.rows;
  }
}
