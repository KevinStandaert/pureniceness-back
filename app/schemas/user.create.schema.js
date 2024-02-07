import Joi from 'joi';

const createUserSchema = Joi.object({
  email: Joi.string().email().required()
    .error(new Error('L\'email est obligatoire et doit être une adresse email valide')),
  password: Joi.string().min(8).required().error(new Error('Le mot de passe est obligatoire et doit faire au moins 8 caractères')),
  passwordConfirm: Joi.string().valid(Joi.ref('password'))
    .strict()
    .error(new Error('Les mots de passe ne correspondent pas')),
  firstname: Joi.string().trim().required().error(new Error('Le prénom est obligatoire')),
  lastname: Joi.string().trim().required().error(new Error('Le nom de famille est obligatoire')),
  birthdate: Joi.date().required().error(new Error('La date de naissance est obligatoire et doit être une date')),
  address: Joi.string().required().error(new Error('L\'adresse est obligatoire')),
  zipcode: Joi.string().trim().required().error(new Error('Le code postal est obligatoire')),
  city: Joi.string().required().error(new Error('La ville est obligatoire')),
  country: Joi.string().trim().required().error(new Error('Le pays est obligatoire')),
});

export default createUserSchema;
