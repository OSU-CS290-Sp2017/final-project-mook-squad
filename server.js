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

var errorFile = fs.readFileSync('./views/404Page.handlebars', 'utf8');
var blogss = fs.readFileSync('./views/partials/blogss.handlebars', 'utf8');
var blogPage = fs.readFileSync('./views/blogPage.handlebars', 'utf8');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/Blog.html', function(req, res){

  var templateArgs = {
    bloggy: blogData
  };
  res.render('blogPage', templateArgs);
});

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function (){
  console.log("Server listening on port ", port);
});
