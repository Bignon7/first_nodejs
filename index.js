const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue dans votre application de vote en ligne !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
