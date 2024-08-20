/**
 * @swagger
 * "/api/v1/productos":
 *  post:
 *    summary: Crea un nuevo producto
 *    tags: [Producto]
 *    parameters:
 *      - in: header
 *        name: x-acess-token
 *        required: true
 *        schema:
 *          type: string
 *        description:  JWT de acceso al sistema
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *                description: Nombre del producto
 *              precio:
 *                type: number
 *                description: Precio del producto
 *              cantidad:
 *                type: number
 *                description: Cantidad existente del producto
 *              descripcion:
 *                type: string
 *                description: Descripcion del producto
 *          required:
 *            - nombre
 *            - precio
 *            - cantidad
 *            - descipcion
 *          example:
 *            nombre: laptop
 *            precio: 300
 *            cantidad: 99
 *            descripcion: Laptop compacta perfecta para trabajar
 */
