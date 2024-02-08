import Joi from 'joi';

const updateAlbumSchema = Joi.object({
  name: Joi.string()
    .error(new Error('Le nom de l\'album doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .error(new Error('L\'année de sortie de l\'album doit être au format YYYY')),
  url_image: Joi.string().uri()
    .error(new Error('L\'URL de l\'image de l\'album doit être une URI valide')),
  type: Joi.string()
    .error(new Error('Le type de l\'album doit être une chaîne de caractères')),
  label_id: Joi.number().integer().positive()
    .error(new Error('L\'identifiant du label doit être un entier positif')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateAlbumSchema;
