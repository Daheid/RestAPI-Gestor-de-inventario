const Joi = require("@hapi/joi")

moodule.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
})
