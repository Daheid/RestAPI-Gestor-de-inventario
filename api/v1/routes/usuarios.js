const express = require("express")
const router = express.Router()

router.post("/", (req, res, next) => {
  res.json({ mesnaje: "obtener usuarios" })
})

module.exports = router
