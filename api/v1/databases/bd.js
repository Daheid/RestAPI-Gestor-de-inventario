const mongoose = require("mongoose")

const bdConexion = async () => {
  try {
    await mongoose.connect(process.env.URI)
    console.log("conexion con MongoDB establecida")
  } catch (err) {
    console.log(err)
  }
}

module.exports = bdConexion
