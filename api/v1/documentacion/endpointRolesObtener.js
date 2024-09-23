/**
 * @swagger
 * "/api/v1/roles/":
 *   get:
 *     summary: Obtiene todos los Roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/rol'
 *       404:
 *         description: No se encontraron roles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/roles'
 */
