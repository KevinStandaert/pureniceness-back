import Joi from 'joi';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userConnectSchema = Joi.object({
  email: Joi.string().max(50).required()
    .trim()
    .pattern(emailRegex)
    .error(new Error('Veuillez fournir une adresse e-mail valide')),
  password: Joi.string().required()
    .error(new Error('Le mot de passe est requis')),
  remember: Joi.string().allow(''),
});

export default userConnectSchema;
