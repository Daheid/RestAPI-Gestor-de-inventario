/**
 * @swagger
 * "/api/v1/productos":
 *  delete:
 *    summary: Eliminar varios productos a la vez
 *    tags: [Producto]
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
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: Identificador del producto a eliminar
 *          example:
 *            - id: "id1"
 *            - id: "id2"
 *    responses:
 *      204:
 *        description: Productos eliminados con éxito
 *      400:
 *        description: Solicitud mal formada
 *      404:
 *        description: Algunos productos no encontrados
 *      401:
 *        description: No autorizado
 */
