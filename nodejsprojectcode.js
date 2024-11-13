// Constant variables are set in the beginning for basing other code logic and decisions on.
const http = require('http');
const fs = require('fs');
// A server is created here that will run the specified html webpages locally.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // The content type is set here to be able to process everything in html and not plaintext.
    res.setHeader('Content-Type', 'text/html');
    // This line of code is used to decide which page to visit.
    let directory = './HTML text/';
    // A switch is used to decide which webpage to go to based on the specific details or the url.
    switch(req.url){
        case '/':
            directory += 'index.html';
            break;
        case '/aboutme':
            directory += 'index2.html';
            break;
        case '/contactme':
            directory += 'index3.html';
            break;
        case '/hobbies':
            directory += 'index4.html';
            break;
        // The following segment of code is in place to redirect urls to the correct page, and in this case the url for the html pages so the links work.
        case '/index.html':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
            break;
        case '/index2.html':
            res.statusCode = 301;
            res.setHeader('Location', '/aboutme');
            res.end();
            break;
        case '/index3.html':
            res.statusCode =301;
            res.setHeader('Location', '/contactme');
            res.end();
            break;
        case '/index4.html':
            res.statusCode = 301;
            res.setHeader('Location', '/hobbies');
            res.end();
        default:
            directory += 'error.html';
            break;
    }
    //The file is being enabled for reading in the code below.
    fs.readFile(directory, (err, data) => {
        // An if else statement is used here to decide how the file will be read and if any errors might occur.
        if (err){
            console.log(err);
            res.end();
        } else {
          res.end(data);
        }
    })
});
//This section of code helps to create a listening protocol for server and establish  a port number.
server.listen(4000, 'localhost', () => {
    console.log('Port 4000 listening');
});