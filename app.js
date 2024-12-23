const express = require('express');
const app = express();
const port = 4000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définir EJS comme moteur de vue
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Dossier où seront stockées les vues

// Définir le dossier public pour les fichiers statiques (images, CSS, JS)
app.use(express.static('public'));

// Route d'accueil qui rend la vue index.ejs
app.get('/', (req, res) => {
  res.render('index', { title: 'Page d\'accueil' }); // Rendre la page index.ejs
});

// Route pour la page 'À propos'
app.get('/about', (req, res) => {
  res.render('about', { title: 'À propos' }); // Rendre la page about.ejs
});

// Connexion à la base de données avec Sequelize
const sequelize = require('./config/database');

// Test de connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('Connexion réussie à la base de données !'))
  .catch(err => console.error('Erreur de connexion :', err));

// Synchronisation des modèles avec la base de données (sans recréer les tables à chaque lancement)
sequelize.sync({ alter: true })
  .then(() => console.log('Les tables ont été synchronisées avec succès !'))
  .catch(err => console.error('Erreur lors de la synchronisation :', err));

// Lancer le serveur sur le port 4000
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
