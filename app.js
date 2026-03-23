const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('public'));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blog Mohamed SARL',
      version: '1.0.0',
      description: 'Documentation de l\'API REST pour la gestion des articles de blog',
    },
    servers: [
      { url: 'http://localhost:3000/api', description: 'Serveur local' },
      { url: 'https://api-blog-production-8f83.up.railway.app/api', description: 'Serveur Railway' },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const articlesRoutes = require('./routes/articles');
app.use('/api/articles', articlesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
module.exports = app;
