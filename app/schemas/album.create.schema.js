import Joi from 'joi';

const createAlbumSchema = Joi.object({
  name: Joi.string().required()
    .error(new Error('Le nom de l\'album est requis et doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .required()
    .error(new Error('L\'année de sortie de l\'album est requise et doit être au format YYYY')),
  url_image: Joi.string().uri().required()
    .error(new Error('L\'URL de l\'image de l\'album est requise et doit être une URI valide')),
  type: Joi.string().required()
    .error(new Error('Le type de l\'album est requis et doit être une chaîne de caractères')),
  label_id: Joi.number().integer().positive().required()
    .error(new Error('L\'identifiant du label est requis et doit être un entier positif')),
});

export default createAlbumSchema;
