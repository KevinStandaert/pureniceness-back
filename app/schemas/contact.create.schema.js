import Joi from 'joi';

const createContactSchema = Joi.object({
  from: Joi.string().email().required()
    .error(new Error('L\'email est obligatoire et doit être une adresse email valide')),
  to: Joi.string().required().error(new Error('L\'email destinataire est obligatoire')),
  reason: Joi.string().error(new Error('La raison de contact est obligatoire')), // mettre le.required() après test
  subject: Joi.string().error(new Error('L\'objet du contact est obligatoire')), // mettre le.required() après test
  company: Joi.string().error(new Error('Le nom de la société n\'est pas au bon format')),
  html: Joi.string().required().error(new Error('le contenu global du mail est obligatoire')),
  email: Joi.string().email().required()
    .error(new Error('L\'email est obligatoire et doit être une adresse email valide')),
  description: Joi.string().required().error(new Error('Le contenu du message est obligatoire')),

});

export default createContactSchema;
