import Joi from 'joi';

const updateLabelSchema = Joi.object({
  name: Joi.string().trim(),
  year: Joi.integer().min(4).max(4),
  city: Joi.string().trim(),
  country: Joi.string().trim(),
  description: Joi.string(),
  url_image: Joi.string().trim(),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateLabelSchema;
