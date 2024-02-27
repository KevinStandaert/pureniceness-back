import client from '../helpers/pg.client.js';

import { formatDates, removePassword } from '../utils/formatdate.removepassword.js';

export default class CoreDatamapper {
  static readTableName;

  static writeTableName;

  static async findAll() {
    const result = await client.query(`SELECT * FROM "${this.readTableName}"`);
    const resultWithoutPassword = result.rows.map(({ password, ...rest }) => rest);
    const modifiedData = resultWithoutPassword.map((row) => {
      const dataWithoutPassword = removePassword(row);
      return formatDates(dataWithoutPassword);
    });
    return modifiedData;
  }

  static async findByPk(id) {
    const result = await client.query(`SELECT * FROM "${this.readTableName}" WHERE "id" = $1`, [id]);
    if (result.rows.length > 0) {
      const data = result.rows[0];
      const dataWithoutPassword = removePassword(data);
      const resultData = formatDates(dataWithoutPassword);
      return resultData;
    }
    return null;
  }

  static async insert(data) {
    const result = await client.query(
      `SELECT * FROM create_${this.writeTableName}($1)`,
      [data],
    );
    return result.rows[0];
  }

  static async update(data) {
    const result = await client.query(
      `SELECT * FROM update_${this.writeTableName}($1)`,
      [data],
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await client.query(`DELETE FROM "${this.writeTableName}" WHERE "id" = $1`, [id]);
    return !!result.rowCount;
  }
}
