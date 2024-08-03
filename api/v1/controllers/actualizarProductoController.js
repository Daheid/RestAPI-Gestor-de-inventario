const Producto = require("./../models/productos")

module.exports = async (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ mensaje: "No se recibieron datos." })
    }
    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!actualizado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el producto indicado" })
    }

    res.status(200).json({ mensaje: "producto actualizado", actualizado })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "error de servidor" })
  }
}
