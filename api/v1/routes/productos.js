var express = require("express")
var router = express.Router()
const verificarToken = require("./../scripts/verificardorToken")

//middleware
const { Producto } = require("./../controllers/obtenerProductosController")
const crearProducto = require("./../controllers/crearProductoController")
const actualizarProducto = require("./../controllers/actualizarProductoController")
const eliminarProducto = require("./../controllers/eliminarProductoController")

//EndPoint Obtener todos los productos
router.get("/", verificarToken, Producto)

//EndPoint Crear productos
router.post("/", verificarToken, crearProducto)

//EndPoint Actualizar productos
router.put("/:id", verificarToken, actualizarProducto)

//EndPoint Eliminar productos
router.delete("/:id", eliminarProducto)
module.exports = router
