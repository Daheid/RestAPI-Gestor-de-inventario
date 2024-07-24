const roles = require("./../models/roles")

module.exports = async () => {
  try {
    const contador = await roles.estimatedDocumentCount()

    if (contador > 0) return
    const valor = await Promise.all([
      new roles({ nombre: "User" }).save(),
      new roles({ nombre: "Admin" }).save(),
    ])

    console.log("valor", "Roles Creados")
  } catch (err) {
    console.log(err)
  }
}
