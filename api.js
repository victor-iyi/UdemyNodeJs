const http = require('http');
const fs = require('fs')

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    fs
      .createReadStream(`${__dirname}/index.html`)
      .pipe(res)
  } else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {
      'firstname': 'Victor I. Afolabi',
      'spouse': 'Ajayi Bolarinwa Comfort Oluwadunsin Mercybee',
      'job': 'Developoer',
      'age': 21
    };
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(PORT, 'localhost');

console.log(`Server listening @ http://localhost:${PORT}`);