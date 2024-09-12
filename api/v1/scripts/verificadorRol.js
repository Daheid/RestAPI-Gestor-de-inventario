const jwt = require("jsonwebtoken")
const Usuario = require("../models/usuarios")
const Rol = require("../models/roles")
const { findOne } = require("../models/usuarios")

const verificarRol = async (req, res, next) => {
  const token = req.header("x-access-token")

  if (!token) return res.json({ mesnaje: "No tiene sesion activa" })

  const decode = jwt.verify(token, process.env.TOKEN)

  req.id = decode.id

  const usuarioRol = await Usuario.findById({ _id: req.id })

  req.rol = usuarioRol.rol

  const rol = req.rol[0].toString()

  const rolEncontrado = await Rol.findById({ _id: rol })
  console.log(rolEncontrado)

  if (!rolEncontrado) return res.json({ mensaje: "Rol no encontrado" })

  User = rolEncontrado.rol
  if (User == "User") return res.json({ mensaje: "Acceso denegado por rol" })

  next()
}

module.exports = verificarRol
