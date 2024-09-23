/**
 * @swagger
 * "/api/v1/productos/{id}":
 *  delete:
 *    summary: Elimina un producto por ID
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID del producto a eliminar
 *      - in: header
 *        name: x-access-token
 *        required: true
 *        schema:
 *          type: string
 *        description: JWT de acceso al sistema
 *    responses:
 *      204:
 *        description: Producto eliminado con éxito
 *      404:
 *        description: Producto no encontrado
 *      401:
 *        description: No autorizado
 */
