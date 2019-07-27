//create a http server
//curl localhost:36000

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);

    process.exit();
});


server.listen(36000);
