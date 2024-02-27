import bcrypt from 'bcrypt';
import UserDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';
import parseIntAndCompare from '../utils/parseint.compare.js';
import { formatDates } from '../utils/formatdate.removepassword.js';

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;

  static async getByPk({ params, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // admin can get all users
    if (userRole === 'admin') {
      const row = await this.datamapper.findByPk(id);
      if (!row) {
        return next();
      }
      return res.status(200).json(row);
    }
    // user connected can get only its infos
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const row = await this.datamapper.findByPk(id);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async getOneUserWithLikes(req, res, next) {
    const { id } = req.params;
    const { userId } = req.user;
    // user connected can get only its infos
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const oneUserWithLikes = await this.datamapper.userTracksLiked(id);
    if (!oneUserWithLikes) {
      const err = new ApiError(
        'Aucun utilisateur trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneUserWithLikes);
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

  static async update({ params, body, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    const { password, ...bodyWithoutPassword } = body;
    const existingUser = await this.datamapper.findByEmail(bodyWithoutPassword.email);

    if (existingUser && existingUser.id !== parseInt(id, 10)) {
      const err = new ApiError(
        'Email déjà utilisé.',
        { httpStatus: 409 },
      );
      return next(err);
    }

    let userData = {};

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      userData = {
        ...bodyWithoutPassword,
        password: hashedPassword,
      };
    } else {
      userData = {
        ...bodyWithoutPassword,
      };
    }

    if (userRole === 'admin') {
      const dbData = await this.datamapper.findByPk(id);
      if (!dbData) {
        return next();
      }

      const data = { ...dbData, ...userData };

      const row = await this.datamapper.update(data);
      if (!row) {
        return next();
      }

      if (row.password) {
        delete row.password;
      }
      const rowFormattedDate = formatDates(row);
      return res.status(200).json(rowFormattedDate);
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
    const data = { ...dbData, ...userData };
    const row = await this.datamapper.update(data);
    if (!row) {
      return next();
    }

    if (row.password) {
      delete row.password;
    }
    const rowFormattedDate = formatDates(row);
    return res.status(200).json(rowFormattedDate);
  }
}
