const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');

router.get('/search', controller.searchArticles);
router.get('/', controller.getArticles);
router.get('/:id', controller.getArticleById);
router.post('/', controller.createArticle);
router.put('/:id', controller.updateArticle);
router.delete('/:id', controller.deleteArticle);

module.exports = router;