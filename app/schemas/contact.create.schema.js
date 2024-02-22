import Joi from 'joi';

const createContactSchema = Joi.object({
  from: Joi.string().email().required()
    .error(new Error('L\'email est obligatoire et doit être une adresse email valide')),
  subject: Joi.string().required().error(new Error('L\'objet du contact est obligatoire')),
  company: Joi.string().error(new Error('Le nom de la société n\'est pas au bon format')),
  message: Joi.string().required().error(new Error('Le contenu du message est obligatoire')),

});

export default createContactSchema;
