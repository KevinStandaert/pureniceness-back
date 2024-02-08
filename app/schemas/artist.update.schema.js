import Joi from 'joi';

const updateArtistSchema = Joi.object({
  firstname: Joi.string()
    .error(new Error('Le prénom de l\'artiste doit être une chaîne de caractères')),
  lastname: Joi.string()
    .error(new Error('Le nom de famille de l\'artiste doit être une chaîne de caractères')),
  nickname: Joi.string()
    .error(new Error('Le surnom de l\'artiste doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .error(new Error('L\'année de naissance de l\'artiste doit être au format YYYY')),
  city: Joi.string()
    .error(new Error('La ville de l\'artiste doit être une chaîne de caractères')),
  country: Joi.string()
    .error(new Error('Le pays de l\'artiste doit être une chaîne de caractères')),
  description: Joi.string()
    .error(new Error('La description de l\'artiste doit être une chaîne de caractères')),
  function: Joi.string()
    .error(new Error('La fonction de l\'artiste doit être une chaîne de caractères')),
  url_image: Joi.string().uri()
    .error(new Error('L\'URL de l\'image de l\'artiste doit être une URI valide')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateArtistSchema;
