//Documentacion de la ruta /auth/login
/**
 * @swagger
 * "/api/v1/usuarios":
 *  post:
 *    summary: Registar un usuario nuevo (requiere token de Administrador)
 *    tags: [auth]
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        required: true
 *        schema:
 *          type: string
 *        description: JWT de acceso al sistema
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *                description: Nombre de usuario
 *            example:
 *              nombre: Nelson
 *              correo: probando@gmail.com
 *              password: "123456"
 *              rol: 66e327ea6790b338ad6eca60
 */
