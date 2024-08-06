var express = require("express")
var router = express.Router()
const verificarToken = require("./../scripts/verificardorToken")

//middleware
const {
  Producto,
} = require("./../controllers/productos/obtenerProductosController")
const crearProducto = require("./../controllers/productos/crearProductoController")
const actualizarProducto = require("./../controllers/productos/actualizarProductoController")
const eliminarProducto = require("./../controllers/productos/eliminarProductoController")

//EndPoint Obtener todos los productos
router.get("/", verificarToken, Producto)

//EndPoint Crear productos
router.post("/", verificarToken, crearProducto)

//EndPoint Actualizar productos
router.put("/:id", verificarToken, actualizarProducto)

//EndPoint Eliminar productos
router.delete("/:id", verificarToken, eliminarProducto)
module.exports = router
