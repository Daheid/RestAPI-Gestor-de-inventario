var express = require("express")
var router = express.Router()

//Importar controladores de login
const login = require("./../controllers/loginUsuarioController")
const verificarToken = require("./../scripts/verificardorToken")

router.post("/login", login)

module.exports = router
