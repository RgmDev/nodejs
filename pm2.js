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
const http = require('http'); // Web Server

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>PM2 is running!</h1>');
  let fecha = new Date();
  res.end('Timestamp: '+fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear()+' '+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds());
}).listen(8080);