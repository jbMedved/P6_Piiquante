// import du package HTTP
const http = require('http');
// on importe le fichier app.js
const app = require('./app');


const server = http.createServer(app);
// le serveur est en écoute sur le port de l'environnement systeme 
// ou sinon le port 3000 par défaut
server.listen(process.env.PORT || 3000);