var express = require("express")
var router = express.Router()
const verificarToken = require("./../scripts/verificardorToken")

//middleware
const { Producto } = require("./../controllers/obtenerProductosController")

//EndPoint Obtener todos los productos
router.get("/", verificarToken, Producto)

//EndPoint Crear productos
router.post("/", (req, res, next) => {
  res.json({ messege: "aqui se crean productos" })
})

module.exports = router
