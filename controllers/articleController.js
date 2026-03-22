const Article = require('../models/article');

exports.createArticle = (req, res) => {
    const { titre, contenu, auteur, categorie, tags } = req.body;
    if (!titre || !contenu || !auteur) {
        return res.status(400).json({ message: 'Titre, contenu et auteur sont obligatoires' });
    }
    try {
        const result = Article.create({ titre, contenu, auteur, categorie, tags });
        res.status(201).json({ message: 'Article créé avec succès', id: result.lastInsertRowid });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.getArticles = (req, res) => {
    const filters = { categorie: req.query.categorie, auteur: req.query.auteur, date: req.query.date };
    try {
        const results = Article.getAll(filters);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.getArticleById = (req, res) => {
    try {
        const article = Article.getById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article non trouvé' });
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.updateArticle = (req, res) => {
    const { titre, contenu, categorie, tags } = req.body;
    try {
        const article = Article.getById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article non trouvé' });
        Article.update(req.params.id, { titre, contenu, categorie, tags });
        res.status(200).json({ message: 'Article modifié avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.deleteArticle = (req, res) => {
    try {
        const article = Article.getById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article non trouvé' });
        Article.delete(req.params.id);
        res.status(200).json({ message: 'Article supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.searchArticles = (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: 'Paramètre de recherche manquant' });
    try {
        const results = Article.search(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};