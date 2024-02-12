import mailer from '../helpers/mail.sender.js';
import ApiError from '../errors/api.error.js';

export default class ContactController {
  // Function to create a message and send it
  static async create({ body }, res, next) {
    const datas = body;
    // Adding a type on datas to define an error or not
    datas.type = 'message';
    const emailSend = await mailer(datas);
    if (!emailSend) {
      const err = new ApiError(
        'Une erreur est survenue lors de l\'envoi du mail. Veuillez réessayer.',
        { httpStatus: 500 }, // Use HTTP status 500 for internal server error
      );
      return next(err);
    }
    return res.status(200).json('Email envoyé avec succès');
  }

/*
  //! TO MODIFY Function to get a message (not MVP, wait for "contact" in database integration)
  static async getByPk({ params }, res, next) {
    const { id } = params;
    const row = await this.datamapper.findByPk(id);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  //! TO MODIFY Function to delete a message (not MVP, wait for "contact" in database integration)
  static async delete({ params }, res, next) {
    const { id } = params;
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }
*/
}
