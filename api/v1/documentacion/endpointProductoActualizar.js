/**
 * @swagger
 * "/api/v1/productos/{id}":
 *  put:
 *    summary: Actualizar un producto
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID del producto a actualizar
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
 *                description: Nombre del producto
 *              precio:
 *                type: number
 *                description: Precio del producto
 *              cantidad:
 *                type: number
 *                description: Cantidad existente del producto
 *              descripcion:
 *                type: string
 *                description: Descripción del producto
 *          example:
 *            nombre: laptop
 *            precio: 300
 *            cantidad: 99
 *            descripcion: Laptop compacta perfecta para trabajar
 */
