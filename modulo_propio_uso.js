const http = require('http');
const modulopropio = require('./modulo_propio_crear'); // OJO a "./", indicar correctamente el directorio

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Fecha recibida del modulo propio:<br> '+modulopropio.myDateTime()+'</h1>');
  res.end();
}).listen(8080);