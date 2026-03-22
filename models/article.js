const bd = require('../config/bd');

const Article = {
    // Récupérer tous les articles
    getAll: (filters) => {
        let query = 'SELECT * FROM articles WHERE 1=1';
        const params = [];

        if (filters.categorie) {
            query += ' AND categorie = ?';
            params.push(filters.categorie);
        }
        if (filters.auteur) {
            query += ' AND auteur = ?';
            params.push(filters.auteur);
        }
        if (filters.date) {
            query += ' AND DATE(date) = ?';
            params.push(filters.date);
        }

        return bd.prepare(query).all(params);
    },

    // Récupérer un article par ID
    getById: (id) => {
        return bd.prepare('SELECT * FROM articles WHERE id = ?').get(id);
    },

    // Créer un article
    create: (data) => {
        const query = bd.prepare('INSERT INTO articles (titre, contenu, auteur, categorie, tags) VALUES (?, ?, ?, ?, ?)');
        return query.run(data.titre, data.contenu, data.auteur, data.categorie, data.tags);
    },

    // Modifier un article
    update: (id, data) => {
        const query = bd.prepare('UPDATE articles SET titre = ?, contenu = ?, categorie = ?, tags = ? WHERE id = ?');
        return query.run(data.titre, data.contenu, data.categorie, data.tags, id);
    },

    // Supprimer un article
    delete: (id) => {
        return bd.prepare('DELETE FROM articles WHERE id = ?').run(id);
    },

    // Rechercher un article
    search: (query) => {
        return bd.prepare('SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?').all(`%${query}%`, `%${query}%`);
    }
};

module.exports = Article;