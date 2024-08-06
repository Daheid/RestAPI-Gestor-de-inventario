const Producto = require("../../models/productos")
const mongoose = require("mongoose")

module.exports = async (req, res) => {
  try {
    const id = req.params.id

    //Verificar que el id sea de formato Mondo
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID invalido" })
    }

    // Buscar el producto por ID
    const producto = await Producto.findById(id)

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({
        error: "No existe el producto",
      })
    }

    //eliminamos el producto

    await Producto.findByIdAndDelete(id)

    res.status(200).json({ mensaje: "Producto eliminado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar producto" })
  }
}
