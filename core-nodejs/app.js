//create a http server
//curl localhost:36000

const http = require('http');

const html = '<!doctype html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <title>TypeScript Todo App</title>\n' +
    '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n' +
    '</head>\n' +
    '<body>\n' +
    '    <div id="container" class="container-fluid">  something goes here </div>\n' +
    '</body>\n' +
    '</html>';

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();

    //process.exit();
});


server.listen(36000);
