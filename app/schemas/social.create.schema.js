import Joi from 'joi';

const createSocialSchema = Joi.object({
  name: Joi.string().required()
    .error(new Error('Le nom du réseau social est requis et doit être une chaîne de caractères')),
  url: Joi.string().required()
    .error(new Error('L\'URL du réseau social est requise et doit être une URI valide')),
  label_id: Joi.number().integer().positive().required()
    .error(new Error('L\'identifiant du label est requis et doit être un entier positif')),
});

export default createSocialSchema;
