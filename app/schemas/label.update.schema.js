import Joi from 'joi';

const updateLabelSchema = Joi.object({
  name: Joi.string()
    .error(new Error('Le nom doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .error(new Error('L\'année doit être au format YYYY')),
  city: Joi.string()
    .error(new Error('La ville doit être une chaîne de caractères')),
  country: Joi.string()
    .error(new Error('Le pays doit être une chaîne de caractères')),
  description: Joi.string()
    .error(new Error('La description doit être une chaîne de caractères')),
  url_image: Joi.string()
    .error(new Error('L\'URL de l\'image du label est requise et doit être une URI valide')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateLabelSchema;
