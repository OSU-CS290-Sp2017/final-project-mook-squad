/* Hosting the Machine Learning/AI Club on the localhost server */

//Hello!!!!

var http = require('http');
var server = http.createServer(requestAndResponse);

var fs = require('fs');
var finalHTML = fs.readFileSync('./index.html', 'utf8');
var finalCSS = fs.readFileSync('./style.css', 'utf8');
var finalJS = fs.readFileSync('./index.js', 'utf8');
var aboutHTML = fs.readFileSync('./about.html', 'utf8');
var errorHTML = fs.readFileSync('./404.html', 'utf8');
var projectsHTML = fs.readFileSync('./projects.html', 'utf8');
var projectsCSS = fs.readFileSync('./projects.css', 'utf8');
var blogHTML = fs.readFileSync('./Blog.html', 'utf8');
var blogCSS = fs.readFileSync('./blog.css', 'utf8');


function requestAndResponse(req,res) {
        var userInput = req.url;
        if (userInput == '/index.html'){
                res.statusCode = 200;
                res.write(finalHTML);

        }

        else if (userInput == '/projects.html'){
                res.statusCode = 200;
                res.write(projectsHTML);

        }
        else if (userInput == '/Blog.html'){
                res.statusCode = 200;
                res.write(blogHTML);

        }
        else if (userInput == '/style.css'){
                res.statusCode = 200;
                res.write(finalCSS);

        }
        else if (userInput == '/index.js'){
                res.statusCode = 200;
                res.write(finalJS);

        }
	else if (userInput == '/about.html'){
		res.statusCode = 200;
		res.write(aboutHTML);
	}
	else {
		res.statusCode = 404;
		res.write(errorHTML);
	}
        res.end();

}

server.listen(3000);

console.log("PORT: ", process.env.PORT || 3000);
console.log("Listening... ");
