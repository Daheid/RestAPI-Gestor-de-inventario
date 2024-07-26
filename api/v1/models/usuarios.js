const mongoose = require("mongoose")

const usuariosSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    rol: [
      { ref: "roles", type: mongoose.Schema.Types.ObjectId },
      { require: true },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model("usuarios", usuariosSchema)

//Documentacion del Modelo de usuario
/**
 * @swagger
 * components:
 *  schemas:
 *    Usuario:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          descripcion: Primer Nombre del usuario
 *        apellido:
 *          type: string
 *          descripcion: Primer apellido del usuario
 *        cedula:
 *          type: number
 *          descripcion: Numero de cedula de identidad
 *        telefono:
 *          type: number
 *          descripcion: Numero celular personal
 *        correo:
 *          type: email
 *          descripcion: Correo electronico para acceder al sistema
 *        password:
 *          type: password
 *          descripcion: Contraseña de acceso al sistema
 *        rol:
 *          type: string
 *          descripcion: Contiene el rol del usuario en el sistema
 *      required:
 *        - nombre
 *        - apellido
 *        - cedula
 *        - telefono
 *        - correo
 *        - password
 *        - rol
 *      example:
 *        nombre: "Jose"
 *        apellido: "Gutierres"
 *        cedula: "28764893"
 *        telefono: "03468274563"
 *        correo: "ejemplo@gmail.com"
 *        password: "1234567890"
 *        rol: "Usuario"
 */
