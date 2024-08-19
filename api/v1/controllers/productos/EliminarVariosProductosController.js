// array = [{ id: "001" }, { id: "002" }]

// console.log(array.length)

// while (array.length != 0) {
//   console.log(array)
//   eliminar = array.shift()
//   console.log(eliminar)
//   console.log(array)
// }

const Producto = require("../../models/productos")
const mongoose = require("mongoose")

module.exports = async (req, res) => {
  try {
    //verifica que existan datos en el body
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ mensaje: "No se recibieron datos." })
    }

    const ids = req.body
    while (ids.length != 0) {
      // Sacar  el objeto del array
      const producto = ids.shift()

      //obtener el valor del objeto
      const eliminar = producto["id"]

      //Verificar el formato del ID
      if (!mongoose.Types.ObjectId.isValid(eliminar)) {
        return res.status(400).json({ error: "el formato del ID es invalido" })
      }

      // Buscar el producto por ID
      const existe = await Producto.findById(eliminar)

      // Verificar si el producto existe
      if (!existe) {
        return res.status(404).json({
          error: "No existe el producto",
        })
      }

      //eliminamos el producto
      await Producto.findByIdAndDelete(eliminar)
    }

    if (ids.length === 0) {
      res.status(200).json({ mensaje: "Productos eliminados" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar producto" })
  }
}
