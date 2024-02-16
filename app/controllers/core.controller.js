import ApiError from '../errors/api.error.js';
import parseIntAndCompare from '../utils/parseint.compare.js';

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

  static async create({ body }, res) {
    const row = await this.datamapper.insert(body);
    res.status(200).json(row);
  }

  static async update({ params, body, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // admin can modify
    if (userRole === 'admin') {
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
    // user connected can modify only its infos
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
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

  static async delete({ params, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // admin can modify
    if (userRole === 'admin') {
      // admin can't delete the main admin account
      if (parseInt(id, 10) === 1) {
        const err = new ApiError(
          'Vous ne pouvez pas supprimer ces informations, seule la modification est possible',
          { httpStatus: 423 },
        );
        return next(err);
      }
      const deleted = await this.datamapper.delete(id);
      if (!deleted) {
        return next();
      }
      return res.status(204).json();
    }
    // user connected can modify only its infos
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }
}
