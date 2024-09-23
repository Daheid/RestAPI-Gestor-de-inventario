const express = require("express")
const router = express.Router()
const { rol } = require("../controllers/roles/obtenerRoles")

router.get("/", rol)

module.exports = router
