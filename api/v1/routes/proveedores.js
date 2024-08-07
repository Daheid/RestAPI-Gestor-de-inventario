const express = require("express")
const router = express.Router()

//Ruta para obtener los proveedores
router.get("/", (req, res, next) => {
  res.json({ mensaje: "aqui se obtienen los proveedores" })
})

//Ruta para crear proveedores
router.post("/", (req, res, next) => {
  res.json({ mensaje: "Aqui se crean los proveedores" })
})

//Ruta para eliminar proveedores
router.delete("/", (req, res, next) => {
  res.json({ mensaje: "Aqui se eliminan los proveedores" })
})

//Rurta para editar proveedores
router.put("/", (req, res, next) => {
  res.json({ mensaje: "Aqui se editan los proveedores" })
})

//Ruta para pedir a proveedores
router.post("/pedido", (req, res, next) => {
  res.json({ mensaje: "Aqui se pide a los proveedores" })
})

module.exports = router
