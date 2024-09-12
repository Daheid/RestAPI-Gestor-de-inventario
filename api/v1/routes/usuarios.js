const express = require("express")
const router = express.Router()

const crearUsuario = require("../controllers/auth/crearUsuariosController")
const JWT = require("../scripts/verificardorToken")
const verificarRol = require("../scripts/verificadorRol")

router.post("/", [JWT, verificarRol], crearUsuario)

module.exports = router
