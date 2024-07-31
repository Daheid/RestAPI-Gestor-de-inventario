const Productos = require("./../models/productos")

const Producto = async (res, res, next) => {
  //Traer datos de la base de datos
  const productos = await Productos.find()
  if (!productos) return res.status(200).json({ mensaje: "No hay productos" })

  res.json(productos)
}

module.exports = Productos
