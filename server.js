/* Hosting the Machine Learning/AI Club on the localhost server */

var http = require('http');
var server = http.createServer(requestAndResponse);

var fs = require('fs');
var finalHTML = fs.readFileSync('./index.html', 'utf8');
var finalCSS = fs.readFileSync('./style.css', 'utf8');
var finalJS = fs.readFileSync('./index.js', 'utf8');

function requestAndResponse(req,res) {
        var userInput = req.url;
        if (userInput == '/index.html'){
                res.statusCode = 200;
                res.write(finalHTML);

        }
        else if (userInput == '/style.css'){
                res.statusCode = 200;
                res.write(finalCSS);

        }
        else if (userInput == '/index.js'){
                res.statusCode = 200;
                res.write(finalJS);

        }
        res.end();

}

server.listen(3000);

console.log("PORT: ", process.env.PORT || 3000);
console.log("Listening... ");
                                   

