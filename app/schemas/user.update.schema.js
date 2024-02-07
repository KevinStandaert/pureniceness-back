import Joi from 'joi';

const updateUserSchema = Joi.object({
  email: Joi.string().email().error(new Error('L\'email doit être une adresse email valide')),
  password: Joi.string().min(8)
    .error(new Error('Le mot de passe doit comporter au moins 8 caractères')),
  passwordconfirm: Joi.string().valid(Joi.ref('password'))
    .strict()
    .error(new Error('Les mots de passe ne correspondent pas')),
  firstname: Joi.string().trim(),
  lastname: Joi.string().trim(),
  birthdate: Joi.date(),
  address: Joi.string(),
  zipcode: Joi.string().trim(),
  city: Joi.string(),
  country: Joi.string().trim(),
}).required().min(1).error(new Error('Au moins un champ doit être spécifié pour la mise à jour'));

export default updateUserSchema;
