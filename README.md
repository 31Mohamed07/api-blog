# 📰 API-BLOG — Mohamed SARL

Une API REST complète pour la gestion d'articles de blog, construite avec **Node.js**, **Express** et **SQLite** (better-sqlite3). Inclut une interface web intégrée et une documentation Swagger interactive.

---

## 🔗 Liens importants

| Ressource | Lien |
|-----------|------|
| 🚀 API en ligne | https://api-blog-production-8f83.up.railway.app/api/articles |
| 🌐 Interface web | https://api-blog-production-8f83.up.railway.app |
| 📚 Documentation Swagger | https://api-blog-production-8f83.up.railway.app/api-docs |
| 💻 Dépôt GitHub | https://github.com/31Mohamed07/api-blog |

---

## 🗂️ Structure du projet

```
API-BLOG/
├── config/
│   └── bd.js                  # Connexion à la base de données SQLite
├── controllers/
│   └── articleController.js   # Logique métier des articles
├── models/
│   └── article.js             # Modèle Article (requêtes SQL)
├── routes/
│   └── articles.js            # Routes Express + documentation Swagger
├── public/
│   └── index.html             # Interface web (frontend)
├── .env                       # Variables d'environnement
├── app.js                     # Point d'entrée de l'application
├── blog.bd                    # Base de données SQLite
└── package.json
```

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- npm

---

## 🚀 Installation

**1. Cloner le projet**
```bash
git clone https://github.com/31Mohamed07/api-blog.git
cd api-blog
```

**2. Installer les dépendances**
```bash
npm install --registry https://registry.npmmirror.com
```

**3. Configurer les variables d'environnement**

Créer ou modifier le fichier `.env` :
```env
PORT=3000
```

**4. Lancer le serveur**
```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

---

## 🌐 Interface Web

Une interface graphique est disponible directement dans le navigateur :

```
http://localhost:3000
```

Elle permet de :
- Consulter le tableau de bord (stats globales)
- Lister, créer, modifier et supprimer des articles
- Rechercher des articles par mot-clé
- Filtrer par catégorie, auteur ou date

---

## 📚 Documentation Swagger

La documentation interactive de l'API est disponible sur :

```
http://localhost:3000/api-docs
```

En production :
```
https://api-blog-production-8f83.up.railway.app/api-docs
```

---

## 📡 Endpoints de l'API

Base URL : `http://localhost:3000/api`

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/articles` | Récupérer tous les articles |
| `GET` | `/articles/:id` | Récupérer un article par ID |
| `POST` | `/articles` | Créer un nouvel article |
| `PUT` | `/articles/:id` | Modifier un article |
| `DELETE` | `/articles/:id` | Supprimer un article |
| `GET` | `/articles/search?query=` | Rechercher des articles |

---

## 📋 Paramètres de filtrage

L'endpoint `GET /articles` accepte des paramètres optionnels :

| Paramètre | Type | Exemple |
|-----------|------|---------|
| `categorie` | string | `?categorie=Tech` |
| `auteur` | string | `?auteur=Mohamed` |
| `date` | string (YYYY-MM-DD) | `?date=2026-03-22` |

---

## 📝 Exemples d'utilisation (curl)

**Créer un article**
```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"titre":"Mon article","contenu":"Contenu ici","auteur":"Mohamed","categorie":"Tech","tags":"node,api"}'
```

**Lister tous les articles**
```bash
curl http://localhost:3000/api/articles
```

**Récupérer un article par ID**
```bash
curl http://localhost:3000/api/articles/1
```

**Modifier un article**
```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{"titre":"Titre modifié","contenu":"Nouveau contenu","categorie":"Tech","tags":"update"}'
```

**Supprimer un article**
```bash
curl -X DELETE http://localhost:3000/api/articles/1
```

**Rechercher des articles**
```bash
curl "http://localhost:3000/api/articles/search?query=node"
```

---

## 🏗️ Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| Node.js | Runtime JavaScript |
| Express.js | Framework web |
| better-sqlite3 | Base de données SQLite |
| dotenv | Gestion des variables d'environnement |
| swagger-ui-express | Interface Swagger |
| swagger-jsdoc | Génération de la doc depuis les commentaires |
| nodemon | Rechargement automatique en développement |
| Railway | Déploiement en production |

---

## 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer en mode développement (nodemon) |
| `npm start` | Lancer en mode production |

---

## 👤 Auteur

**Mohamed SARL**  
Projet développé avec Node.js, Express et SQLite.
