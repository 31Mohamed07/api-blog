const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - titre
 *         - contenu
 *         - auteur
 *       properties:
 *         id:
 *           type: integer
 *         titre:
 *           type: string
 *         contenu:
 *           type: string
 *         auteur:
 *           type: string
 *         categorie:
 *           type: string
 *         tags:
 *           type: string
 *         date:
 *           type: string
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     parameters:
 *       - in: query
 *         name: categorie
 *         schema:
 *           type: string
 *       - in: query
 *         name: auteur
 *         schema:
 *           type: string
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des articles
 */
router.get('/', articleController.getArticles);

/**
 * @swagger
 * /articles/search:
 *   get:
 *     summary: Rechercher des articles
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Résultats de recherche
 */
router.get('/search', articleController.searchArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article trouvé
 *       404:
 *         description: Article non trouvé
 */
router.get('/:id', articleController.getArticleById);

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Article créé
 *       400:
 *         description: Champs manquants
 */
router.post('/', articleController.createArticle);

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Modifier un article
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Article modifié
 *       404:
 *         description: Article non trouvé
 */
router.put('/:id', articleController.updateArticle);

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article supprimé
 *       404:
 *         description: Article non trouvé
 */
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
