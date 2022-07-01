const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filename = '';
    if (req.url === '/')
        filename = 'index.html';
    if (req.url === '/main.js')
        filename = 'main.js';
    if (!filename) return res.end()
    fs.readFile('./' + filename, (err, data) => {
        if(err) {
             res.statusCode = 500
             return res.end();
        }
        res.write(data);
        res.end();
    });
});


server.listen(8080);