var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
fs.readFile('posts.json', (err, data) => {
    if(err) throw err;
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(data);
    res.end();
})
}).listen(3000);