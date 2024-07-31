var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
  res.json({messege: "aqui productos"})
})

module.exports = router
