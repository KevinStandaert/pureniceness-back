import Joi from 'joi';

const createArtistSchema = Joi.object({
  firstname: Joi.string().required()
    .error(new Error('Le prénom de l\'artiste est requis et doit être une chaîne de caractères')),
  lastname: Joi.string().required()
    .error(new Error('Le nom de famille de l\'artiste est requis et doit être une chaîne de caractères')),
  nickname: Joi.string().required()
    .error(new Error('Le surnom de l\'artiste est requis et doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .required()
    .error(new Error('L\'année de naissance de l\'artiste est requise et doit être au format YYYY')),
  city: Joi.string().required()
    .error(new Error('La ville de l\'artiste est requis et doit être une chaîne de caractères')),
  country: Joi.string().required()
    .error(new Error('Le pays de l\'artiste est requis et doit être une chaîne de caractères')),
  description: Joi.string().required()
    .error(new Error('La description de l\'artiste est requise et doit être une chaîne de caractères')),
  function: Joi.string().required()
    .error(new Error('La fonction de l\'artiste est requise et doit être une chaîne de caractères')),
  url_image: Joi.string().uri().required()
    .error(new Error('L\'URL de l\'image de l\'artiste est requise et doit être une URI valide')),
});

export default createArtistSchema;
