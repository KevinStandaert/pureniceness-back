import Joi from 'joi';

const updateSocialSchema = Joi.object({
  name: Joi.string()
    .error(new Error('Le nom du réseau social doit être une chaîne de caractères')),
  url: Joi.string().uri()
    .error(new Error('L\'URL du réseau social doit être une URI valide')),
  label_id: Joi.number().integer().positive()
    .error(new Error('L\'identifiant du label doit être un entier positif')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateSocialSchema;
