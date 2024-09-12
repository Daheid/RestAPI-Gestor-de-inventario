/**
 * @swagger
 * "/api/v1/productos/":
 *   get:
 *     summary: Obtiene todos los productos (sin paginación)
 *     tags: [Producto]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT para el acceso al sistema
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Productos'
 */
