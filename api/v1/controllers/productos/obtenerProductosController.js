const Productos = require("../../models/productos")

const Producto = async (req, res, next) => {
  try {
    //trear datos
    const productos = await Productos.find()
    if (!productos || productos.length == 0) {
      return res.status(404).json({ mensaje: "No hay productos" })
    }
    res.json(productos)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { Producto }
