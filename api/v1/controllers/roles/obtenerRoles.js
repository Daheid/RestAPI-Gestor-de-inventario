const Roles = require("../../models/roles")

const rol = async (req, res, next) => {
  try {
    //trear datos
    const roles = await Roles.find()
    if (!roles || roles.length == 0) {
      return res.status(404).json({ mensaje: "No hay roles" })
    }
    res.json(roles)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { rol }
