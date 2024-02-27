/* eslint-disable no-console */
import logger from '../logger/index.logger.js';
import mailer from './mail.sender.js';

// eslint-disable-next-line no-unused-vars

// Send an email to us to alert about errors and server crashes
export default async (err, request, response, next) => {
  try {
    if (!err) {
      next();
    }

    if (err.httpStatus === 500) {
      logger.error('Error 500', err);
      const datas = {
        receiver: process.env.GLOBALCONTACTMAIL,
        subject: 'Erreur 500 sur le site',
        content: `Le site rencontre des problèmes.
        Détails de l'erreur :\n\n${err.stack}`,
      };
      const sendSuccess = await mailer(datas);
      if (!sendSuccess) {
        console.error('Erreur lors de l\'envoi de l\'e-mail.');
      }
    }
    return response.status(err.httpStatus).json({ error: err.message });
  } catch (error) {
    logger.error('Error in error handling middleware', error);
    return response.status(500).json('Erreur lors de la gestion de l\'erreur.');
  }
};
