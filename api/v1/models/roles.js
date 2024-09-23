const mongoose = require("mongoose")

const rolSchema = new mongoose.Schema(
  {
    rol: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model("Roles", rolSchema)
/**
 * @swagger
 * components:
 *  schemas:
 *     Roles:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          descripcion: Identificador unico del rol, asignado automaticamente
 *        rol:
 *          type: string
 *          descripcion: Nombre del nivel del rol
 *      required:
 *        - rol
 *      example:
 *        _id: "57e337ea679ob358ad6aca61"
 *        rol: "Administrador"
 */
