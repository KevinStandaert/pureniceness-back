import Joi from 'joi';

const updateTrackSchema = Joi.object({
  name: Joi.string()
    .error(new Error('Le nom de la musique doit être une chaîne de caractères')),
  year: Joi.number().integer().min(1000).max(9999)
    .error(new Error('L\'année de sortie de la musique doit être au format YYYY')),
  url_image: Joi.string().uri()
    .error(new Error('L\'URL de l\'image de la musique doit être une URI valide')),
  url_sound: Joi.string().uri()
    .error(new Error('L\'URL du son de la musique doit être une URI valide')),
  listening: Joi.number().integer().min(0)
    .error(new Error('Le nombre d\'écoutes de la musique doit être un entier supérieur ou égale à 0')),
  duration: Joi.number().integer().positive()
    .error(new Error('La durée de la musique en seconde doit être un entier positif')),
  style: Joi.string()
    .error(new Error('Le style de la musique doit être une chaîne de caractères')),
  album_id: Joi.number().integer().positive()
    .error(new Error('L\'identifiant de l\'album doit être un entier')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateTrackSchema;
