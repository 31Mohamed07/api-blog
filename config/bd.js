const Database = require('better-sqlite3');
const path = require('path');

const bd = new Database(path.join(__dirname, '../blog.bd'));

// Création de la table si elle n'existe pas
bd.exec(`
    CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titre TEXT NOT NULL,
        contenu TEXT NOT NULL,
        auteur TEXT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        categorie TEXT,
        tags TEXT
    )
`);

console.log('Connecté à la base de données SQLite !');

module.exports = bd;