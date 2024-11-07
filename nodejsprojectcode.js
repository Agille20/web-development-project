const http = require('http');
const file = require('file');
const nodejsprojectcode = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    //The file is being enabled for reading in the code below.
    file.readFile('.HTML files/index.html', (data) => {
        res.write(data);
        res.end();
    })
});
//This section of code helps to create a listening protocol for server and establish port number.
nodejsprojectcode.listen(4000, 'localhost', () => {
    console.log('Server request made for port 4000');
})