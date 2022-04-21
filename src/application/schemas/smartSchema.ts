import Joi from "joi";

export const smartSchema = Joi.object({
  id: Joi.string().guid().allow("", null).optional(),
  name: Joi.string().allow("").optional(),
  gas: Joi.string().allow("", null).optional(),
});
