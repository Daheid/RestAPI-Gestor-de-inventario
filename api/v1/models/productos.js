const mongoose = require("mongoose")

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, require: true },
  descripcion: { type: String, required: true },
})

module.exports = mongoose.model("Productos", productoSchema)

//Documentacion del Modelo de producto
/**
 * @swagger
 * components:
 *  schemas:
 *     Productos:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          descripcion: Primer Nombre del producto
 *        precio:
 *          type: number
 *          descripcion: Precio del producto
 *        cantidad:
 *          type: number
 *          descripcion: Cantidad existente del producto
 *        descripcion:
 *          type: string
 *          descripcion: Descripcion del producto
 *      required:
 *        - nombre
 *        - precio
 *        - cantidad
 *        - descripcion
 *      example:
 *        nombre: "Camisa roja."
 *        precio: 12
 *        cantidad: 4
 *        descripcion: "Camisa color rojo, talla M."
 */
