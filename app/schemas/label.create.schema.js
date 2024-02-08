import Joi from 'joi';

const createLabelSchema = Joi.object({
  name: Joi.string().required()
    .error(new Error('Le nom du label est requis et doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .required()
    .error(new Error('L\'année de création du label doit être au format YYYY')),
  city: Joi.string().required()
    .error(new Error('Le nom de la ville est requis et doit être une chaîne de caractères')),
  country: Joi.string().required()
    .error(new Error('Le nom du pays est requis et doit être une chaîne de caractères')),
  description: Joi.string().required()
    .error(new Error('Une description du label est requise et doit être une chaîne de caractères')),
  url_image: Joi.string().required()
    .error(new Error('L\'URL de l\'image est requise et doit être une url')),
});

export default createLabelSchema;
