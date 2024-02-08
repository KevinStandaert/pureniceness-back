import Joi from 'joi';

const updateEventSchema = Joi.object({
  name: Joi.string()
    .error(new Error('Le nom de l\'événement doit être une chaîne de caractères')),
  type: Joi.string()
    .error(new Error('Le type de l\'événement doit être une chaîne de caractères')),
  description: Joi.string()
    .error(new Error('La description de l\'événement doit être une chaîne de caractères')),
  starting_date: Joi.date().iso()
    .error(new Error('La date de début de l\'événement doit être au format ISO')),
  ending_date: Joi.date().iso().greater(Joi.ref('starting_date'))
    .error(new Error('La date de fin de l\'événement doit être postérieure à la date de début')),
  city: Joi.string()
    .error(new Error('La ville de l\'événement doit être une chaîne de caractères')),
  country: Joi.string()
    .error(new Error('Le pays de l\'événement doit être une chaîne de caractères')),
  location: Joi.string()
    .error(new Error('L\'emplacement de l\'événement doit être une chaîne de caractères')),
  url_image: Joi.string()
    .error(new Error('L\'URL de l\'image de l\'événement doit être une URl valide')),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateEventSchema;
