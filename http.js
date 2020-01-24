const http = require('http'); // Web Server

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<h1>URL: '+req.url+'</h1>'); 
  var base = 'http://' + req.headers.host + '/';
  var url = new URL(req.url, base); // Objeto URL = module 'url'
  var txt = url.port+' '+url.searchParams.get('year')+'/'+url.searchParams.get('month');
  res.end(txt);
}).listen(8080);

// http://localhost:8080/summer?year=2020&month=October