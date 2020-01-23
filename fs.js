const http = require('http');
const fs = require('fs');

// READ FILES
// ----------
http.createServer(function (req, res) {
  fs.readFile('data/demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
// ejecutar "node fs.js" y acceder a "localhost:8080" para ver el contenido del fichero


// CREATE & UPDATE FILES
// ---------------------
// fs.appendFile()
// Añade contenido a un fichero, si no existe el fichero lo crea, si existe lo añade
fs.appendFile('data/mynewfile1.txt', 'Linea 1'+"\n", function (err) {
  if (err) throw err;
  console.log('¡Guardado!');
});
fs.appendFile('data/mynewfile1.txt', 'Linea 2'+"\n", function (err) {
  if (err) throw err;
  console.log('¡Guardado!');
});

// fs.open()
// esta función recibe un segundo parametro que indica la acción sobre el fichero: 'r' para leer y 'w' para escribir
fs.open('data/mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('¡Guardado!');
});

// fs.writeFile()
// Reemplaza el archivo
fs.writeFile('data/mynewfile3.txt', 'This is my texto', function (err) {
  if (err) throw err;
  console.log('¡Reemplazado!');
});


// DELETE FILES 
// ------------
fs.unlink('data/mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('¡Archivo eliminado!');
});


// RENAME FILES 
// ------------
fs.rename('data/mynewfile1.txt', 'data/myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('¡Archivo renombrado!');
});