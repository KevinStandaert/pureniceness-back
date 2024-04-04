import ApiError from '../errors/api.error.js';
import deleteCloudinaryFile from '../utils/delete.cloudinary.js';
import deleteFile from '../utils/delete.file.js';
import extractCloudinaryFileId from '../utils/extract.cloudinary.id.js';
import extractDriveFileId from '../utils/extract.drive.id.js';
import { formatDates, removePassword } from '../utils/formatdate.removepassword.js';
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

  static async create({ body }, res, next) {
    const row = await this.datamapper.insert(body);
    if (!row) {
      return next();
    }
    const dataWithoutPassword = removePassword(row);
    const resultData = formatDates(dataWithoutPassword);
    return res.status(201).json(resultData);
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

      if (data.url_image !== dbData.url_image) {
        const imageIdToDelete = dbData?.url_image
          ? extractCloudinaryFileId(dbData.url_image)
          : null;
        if (imageIdToDelete) {
          deleteCloudinaryFile(imageIdToDelete);
        }
      }

      if (data.url_sound !== dbData.url_sound) {
        const soundIdToDelete = dbData?.url_sound
          ? extractDriveFileId(dbData.url_sound)
          : null;
        if (soundIdToDelete) {
          deleteFile(soundIdToDelete);
        }
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
    const data = { ...dbData, ...body };
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

  static async delete({ params, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // admin can modify
    if (userRole === 'admin') {
      const elementToDelete = await this.datamapper.findByPk(id);

      const deleted = await this.datamapper.delete(id);

      if (!deleted) {
        return next();
      }

      const imageId = elementToDelete?.url_image
        ? extractCloudinaryFileId(elementToDelete.url_image)
        : null;
      if (imageId) {
        deleteCloudinaryFile(imageId);
      }

      const soundId = elementToDelete?.url_sound
        ? extractDriveFileId(elementToDelete.url_sound)
        : null;
      if (soundId) {
        deleteFile(soundId);
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

  static async updateOrders(req, res, next) {
    const { id } = req.params;
    const { orders } = req.body;
    const ordersUpdated = await this.datamapper.ordered(id, orders);
    if (!ordersUpdated) {
      const err = new ApiError(
        'Erreur lors de la mise à jour de l\'ordre',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json('Ordre mis à jour avec succès');
  }
}
