import client from '../helpers/pg.client.js';

import { formatDates, removePassword } from '../utils/formatdate.removepassword.js';

export default class CoreDatamapper {
  static readTableName;

  static writeTableName;

  static orderedTableName;

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

  static async ordered(id, orderList) {
    // Initialize the SQL update query
    let updateQuery = `UPDATE "${this.orderedTableName}" SET "order" = CASE `;

    // Initialize arrays to hold placeholders and values for the query
    const values = [];

    // Iterate over the order list to construct placeholders and values
    orderList.forEach((element, index) => {
      values.push(element.id, index);
    });

    // Iterate over the order list to construct the "WHEN" clauses for the SQL update query
    orderList.forEach((elementId, index) => {
      const whenIndex = index * 2 + 1;
      updateQuery += `WHEN "id" = $${whenIndex} THEN $${whenIndex + 1} `;
    });

    // Add the "ELSE" and "END" parts of the SQL update query
    updateQuery += 'ELSE "order" END ';

    // Construct the "WHERE" clause for the SQL update query
    updateQuery += `WHERE "${this.writeTableName}_id" = $${orderList.length * 2 + 1}`;

    // Add the albumId to the values array
    values.push(parseInt(id, 10));
    const result = await client.query(updateQuery, values);

    // Return true if the update was successful, otherwise false
    return !!result.rowCount;
  }
}
