const Producto = require("../../models/productos")

module.exports = async (req, res, next) => {
  try {
    const { nombre, precio, cantidad, descripcion } = req.body
    if (!nombre || !precio || !cantidad || !descripcion) {
      return res.json({ error: "Todos los campos son requeridos" })
    }
    const repetido = await Producto.findOne({ nombre: nombre })

    if (repetido)
      return res.status(409).json({ error: "El producto ya esta registrado" })

    const nuevoProducto = new Producto({
      nombre,
      precio,
      cantidad,
      descripcion,
    })
    await nuevoProducto.save()

    res.status(201).json(nuevoProducto)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
