var express = require("express")
var router = express.Router()

//Importar controladores de login
const login = require("./../controllers/auth/loginUsuarioController")

router.post("/login", login)

module.exports = router
//Documentacion de la ruta /auth/login
/**
 * @swagger
 * "/api/v1/auth/login":
 *  post:
 *    summary: Autenticar al usuario para acceder al sistema
 *    tags: [auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              correo:
 *                type: string
 *                format: email
 *                description: Correo de acceso
 *              password:
 *                type: string
 *                format: password
 *                description: clave de acceso
 *            required:
 *              - correo
 *              - password
 *            example:
 *              correo: a@gmail.com
 *              password: "123456"
 *
 *
 *    responses:
 *      200:
 *        description: La autenticacion fue exitosa
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               token:
 *                type: string
 *              example:
 *               token: "eyJhbGciOiJIUzI1NiIsInR5c6IkpXVCJ9.eyJpZCI6IjY2YTI3NjY0YzQ0ZmIyNmJlZDZkODA4OSIsImlhdCI6MTcyMjAyOTcxMCZXhwIjoxNzIyMTE2MTEwfQ._5MoqlL40Ki7q5Ndo-fe56JWRiMdMkgg_HFyFDJI"
 *      400:
 *        description: La autenticacion Ha fallado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               token:
 *                type: null
 *               error:
 *                type: string
 *              example:
 *                token: null
 *                error: "correo incorrecto"
 */
