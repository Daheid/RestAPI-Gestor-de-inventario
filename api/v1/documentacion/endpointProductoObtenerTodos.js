/**
 * @swagger
 * "/api/v1/productos/":
 *   get:
 *     summary: Obtiene todos los productos (sin paginación)
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Productos'
 *       404:
 *         description: No existen productos
 */
