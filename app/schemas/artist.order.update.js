import Joi from 'joi';

const updateArtistsOrderSchema = Joi.object().keys({
  orders: Joi.array().items(
    Joi.object({
      artistId: Joi.number().integer().positive().required()
        .error(new Error('L\'id de l\'artiste doit être un nombre entier positif')),
    }),
  ).min(1).required()
    .error(new Error('L\'ordre doit contenir au moins un élément')),
});

export default updateArtistsOrderSchema;
