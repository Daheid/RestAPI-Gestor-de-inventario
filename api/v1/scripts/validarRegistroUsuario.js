const Joi = require("@hapi/joi")

module.exports = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  cedula: Joi.string().require().unique(),
  telefono: Joi.string().required(),
  correo: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  rol: Joi.string().required().valid("Admin", "Usuario"),
})
