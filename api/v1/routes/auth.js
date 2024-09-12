var express = require("express")
var router = express.Router()

//Importar controladores de login
const login = require("./../controllers/auth/loginUsuarioController")

router.post("/login", login)

module.exports = router
