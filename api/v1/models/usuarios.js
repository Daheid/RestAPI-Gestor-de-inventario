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
