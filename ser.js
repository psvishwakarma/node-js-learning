
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = "." + req.url;

    if (filePath === './') {
        filePath = './index.html';

    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // var path = req.url;
    // switch (path) {
    //     case "/":
    //         path += 'index.html';
    //         break;
    //     case "/admin":
    //         path += 'Admin.html';
    //         break;
    //     default:
    //         path += "404.html";

    // }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            // res.write('Contents you are looking for-not found');
            res.end('404 not found');
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            // res.write(data.toString());
            res.end(content, 'utf8');
        }
    });

});

server.listen(3000, () => {

    console.log('Server running');


});
