var express = require("express")
var router = express.Router()

//middleware
const { Producto } = require("./../controllers/obtenerProductosController")

router.get("/", Producto)

module.exports = router
