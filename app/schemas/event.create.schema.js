import Joi from 'joi';

const createEventSchema = Joi.object({
  name: Joi.string().required()
    .error(new Error('Le nom de l\'événement est obligatoire et doit être une chaîne de caractères')),
  type: Joi.string().required()
    .error(new Error('Le type de l\'événement est obligatoire et doit être une chaîne de caractères')),
  description: Joi.string().required()
    .error(new Error('La description de l\'événement est obligatoire et doit être une chaîne de caractères')),
  starting_date: Joi.date().iso().required()
    .error(new Error('La date de début de l\'événement est obligatoire et doit être au format ISO')),
  ending_date: Joi.date().iso().required().greater(Joi.ref('starting_date'))
    .error(new Error('La date de fin de l\'événement doit être postérieure à la date de début et doit être au format ISO')),
  city: Joi.string().required()
    .error(new Error('La ville de l\'événement est obligatoire et doit être une chaîne de caractères')),
  country: Joi.string().required()
    .error(new Error('Le pays de l\'événement est obligatoire et doit être une chaîne de caractères')),
  location: Joi.string().required()
    .error(new Error('L\'emplacement de l\'événement est obligatoire et doit être une chaîne de caractères')),
  url_image: Joi.string().required()
    .error(new Error('L\'URL de l\'image de l\'événement est obligatoire et doit être une URI valide')),
});

export default createEventSchema;
