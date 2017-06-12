/*
 * Write your Express server in this file as described in README.md.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var blogData = require('./blog');

var app = express();
var port = process.env.PORT || 3000;

var indexFile = fs.readFileSync('./public/index.html');
var errorFile = fs.readFileSync('./404.html', 'utf8');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function (){
  console.log("Server listening on port ", port);
});
