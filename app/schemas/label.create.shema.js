import Joi from 'joi';

const createLabelSchema = Joi.object({
  name: Joi.string().trim().required().error(new Error('Le nom du label est obligatoire')),
  year: Joi.integer().min(4).max(4).required().error(new Error('L\'année de création du label doit être sous la forme YYYY')),
  city: Joi.string().trim().required().error(new Error('Le nom de la ville est obligatoire')),
  country: Joi.string().trim().required().error(new Error('Le nom du pays est obligatoire')),
  description: Joi.string().required().error(new Error('Une description du label est obligatoire')),
  url_image: Joi.string().trim().required().error(new Error('L\'URL de l\'image est obligatoire')),
});

export default createLabelSchema;
