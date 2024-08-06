const Usuario = require("../../models/usuarios")
const validarLogin = require("../../scripts/validarLogin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res, next) => {
  //validar datos
  const { err } = validarLogin.validate(req.body)

  if (err) return res.status(400).json({ error: err.detail[0].messege })

  //buscar coincidencia de email
  const validarUsuario = await Usuario.findOne({
    correo: req.body.correo,
  }).populate("rol")

  if (!validarUsuario) {
    return res.status(400).json({ token: null, error: "Email no encontrado" })
    next()
  }

  //Buscar coincidencia de password
  const validarPassword = await bcrypt.compare(
    req.body.password,
    validarUsuario.password
  )

  if (!validarPassword)
    return res.status(400).json({ token: null, error: "contraseña erronea" })

  //Ingresar token al registrar
  const token = jwt.sign({ id: validarUsuario._id }, process.env.TOKEN, {
    expiresIn: 86400,
  })

  res.status(200).json({ token: token })
}

module.exports = login
