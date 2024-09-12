const Usuario = require("../../models/usuarios")
const bcrypt = require("bcrypt")
const Rol = require("../../models/roles")

module.exports = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "No se recibieron datos." })
  }
  try {
    const { nombre, correo, rol } = req.body
    const passworddesen = req.body.password

    //encriptar contraseña
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(passworddesen, salt)

    //El rol no existe en la base de datos
    const rolExiste = await Rol.findOne({ _id: rol })
    if (!rolExiste) return res.json({ mensaje: "El rol asignado no existe" })

    //el nombre ya existe
    const nombreExiste = await Usuario.find({ nombre: nombre })

    if (nombreExiste.length > 0)
      return res.json({ mensaje: "El nombre de usuario ya existe" })

    //el correo ya existe
    const emailExiste = await Usuario.find({ correo: correo })
    if (emailExiste.length > 0)
      return res.json({ mensaje: "El correo del usuario ya existe" })

    //estructurar el usuario
    const usuarioNew = new Usuario({
      nombre,
      correo,
      password,
      rol,
    })
    //Registrar usuario
    await usuarioNew.save()
    res.json({ mensaje: "Usuario Creado" })
  } catch (err) {
    console.log(err)
  }
}
