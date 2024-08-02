const mongoose = require("mongoose")

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, require: true },
  descripcion: { type: String, required: true },
})

module.exports = mongoose.model("Productos", productoSchema)
