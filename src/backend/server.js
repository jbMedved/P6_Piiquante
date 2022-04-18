// import du package HTTP
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('serveur opérationnel !');
});
// le serveur est en écoute sur le port de l'environnement systeme 
// ou sinon le port 3000 par défaut
server.listen(process.env.PORT || 3000);