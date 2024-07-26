const path = require("path")

module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Rest - Gestor de Inventario",
      version: "1.0.0",
      description: "API Rest para la gestion de inventario",
    },
    servers: [
      {
        url: "https://gestor-de-inventario.onrender.com/",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
}
