/*
  - Para instalar pm2
  npm install pm2 -g
  - Para ejecutarlo 
  pm2 start fichero-node.js
  - Otros comandos pm2
  pm2 stop  

  https://desarrolloweb.com/articulos/ejecutar-aplicacion-nodejs-pm2.html

  https://www.npmjs.com/package/pm2

  https://riptutorial.com/es/node-js/example/21325/despliegue-utilizando-pm2

*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(new Date());
  }
}).listen(8080);