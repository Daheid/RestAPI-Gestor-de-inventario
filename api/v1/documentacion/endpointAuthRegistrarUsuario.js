// Documentación de la ruta /auth/login
/**
 * @swagger
 * "/api/v1/usuarios":
 *  post:
 *    summary: Registrar un usuario nuevo (requiere token de Administrador)
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
 *              correo:
 *                type: string
 *                format: email
 *                description: Correo electrónico del usuario
 *              password:
 *                type: string
 *                description: Contraseña del usuario
 *              rol:
 *                type: string
 *                description: ID del rol del usuario
 *            required:
 *              - nombre
 *              - correo
 *              - password
 *              - rol
 *            example:
 *              nombre: Nelson
 *              correo: probando@gmail.com
 *              password: "123456"
 *              rol: 66e327ea6790b338ad6eca60
 *    responses:
 *      201:
 *        description: Usuario registrado con éxito
 *      400:
 *        description: Solicitud mal formada
 *      401:
 *        description: No autorizado
 *      409:
 *        description: Conflicto, el usuario ya existe
 */
