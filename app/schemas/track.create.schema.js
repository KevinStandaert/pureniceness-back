import Joi from 'joi';

const createTrackSchema = Joi.object({
  name: Joi.string().required()
    .error(new Error('Le nom de la musique est requis et doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .required()
    .error(new Error('L\'année de sortie de la musique est requise et doit être au format YYYY')),
  url_image: Joi.string().uri().required()
    .error(new Error('L\'URL de l\'image de la musique est requise et doit être une URI valide')),
  url_sound: Joi.string().uri().required()
    .error(new Error('L\'URL du son de la musique est requise et doit être une URI valide')),
  duration: Joi.number().integer().positive().required()
    .error(new Error('La durée de la musique en seconde est requise et doit être un entier positif')),
  style: Joi.string()
    .error(new Error('Le style de la musique est requis et doit être une chaîne de caractères')),
  album_id: Joi.number().integer().positive().required()
    .error(new Error('L\'identifiant de l\'album est requis et doit être un entier positif')),
});

export default createTrackSchema;
