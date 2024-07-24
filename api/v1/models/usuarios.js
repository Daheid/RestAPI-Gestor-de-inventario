const mongoose = require("mongoose")

const usuariosSchema = new mongoose.Schema(
  {
    nombre: { type: string, required: true },
    apellido: { type: string, required: true },
    cedula: { type: string, required: true, unique: true },
    telefono: { type: string, required: true, unique: true },
    correo: { type: string, required: true, unique: true },
    password: { type: string, required: true },
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
