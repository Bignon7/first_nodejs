const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur Node.js avec Express!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
