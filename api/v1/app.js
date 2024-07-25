var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const cors = require("cors")

//importar script de crear roles
const crearRoles = require("./scripts/crearRoles")

//importar la conexion con la base ded atos
const bdConexion = require("./databases/bd")

//Importar rutas
var indexRouter = require("./routes/index")
var authRouter = require("./routes/auth")

//asignar express a una variable
var app = express()

app.use(cors())

//conexion con la base de datos
bdConexion()
//crar roles
crearRoles()

//
app.use(logger("dev"))

//Permite al servidor leer json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Cookie parser
app.use(cookieParser())

//Asignacion de rutas
app.use("/api/v1", indexRouter)
app.use("/api/v1/auth", authRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
