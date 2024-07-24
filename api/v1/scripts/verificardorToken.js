const Usuario = require("./../models/usuarios")
const jwt = require("jsonwebtoken")

const verificarToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"]

    if (!token) return res.status(400).json({ error: "No tiene sesion activa" })

    const decoded = jwt.verify(token, proccess.env.TOKEN)

    req.idUser = dedoced.id

    const user = await Usuario.findById(req.idUser, { password: 0 })

    if (!user) return res.status(404).json({ error: "El susuario no existe" })

    next()
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

module.exports = verificarToken
