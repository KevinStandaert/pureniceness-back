export default class Controller {
  static datamapper;

  static async getAll(_, res) {
    const rows = await this.datamapper.findAll();
    res.status(200).json(rows);
  }

  static async getByPk({ params }, res, next) {
    const { id } = params;
    const row = await this.datamapper.findByPk(id);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async create({ body }) {
    const row = await this.datamapper.insert(body);
    return row;
  }

  static async update({ params, body }, res, next) {
    const { id } = params;
    const dbData = await this.datamapper.findByPk(id);

    if (!dbData) {
      return next();
    }

    const data = { ...dbData, ...body };

    const row = await this.datamapper.update(data);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async delete({ params }, res, next) {
    const { id } = params;
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }
}
