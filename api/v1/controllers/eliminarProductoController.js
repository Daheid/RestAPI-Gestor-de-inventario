const Producto = require("./../models/productos")

module.exports = async (req, res, next) => {
  if (!req.params) {
    return res.json({ error: "No se envio ningun valor" })
    next()
  }
  try {
    const { id } = req.params
    await Producto.findByIdAndDelete(id)

    res.status(204).json({ mensaje: "Producto eliminado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar producto" })
  }
}
