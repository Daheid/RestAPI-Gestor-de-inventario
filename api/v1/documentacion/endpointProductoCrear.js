/**
 * @swagger
 * "/api/v1/productos":
 *  post:
 *    summary: Crea un nuevo producto
 *    tags: [Producto]
 *    parameters:
 *      - in: header
 *        name: x-access-token
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
 *            - descripcion
 *          example:
 *            nombre: laptop
 *            precio: 300
 *            cantidad: 99
 *            descripcion: Laptop compacta perfecta para trabajar
 *    responses:
 *       201:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Productos'
 *       409:
 *         description: El producto ya se encuentra registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Productos'
 *       404:
 *         description: Todos los campos son requeridos
 */
