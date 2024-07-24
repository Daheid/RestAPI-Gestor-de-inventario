const mongoose = require("mongoose")

const bdconexion = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log("conexion con MongoDB establecida")
  } catch (err) {
    console.log(err)
  }
}

module.exports = bdconexion
