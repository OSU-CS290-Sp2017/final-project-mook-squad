/*
 * Write your Express server in this file as described in README.md.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var blogData = require('./blog');

var app = express();
var port = process.env.PORT || 3000;

var errorFile = fs.readFileSync('./views/404Page.handlebars', 'utf8');
var blogss = fs.readFileSync('./views/partials/blogss.handlebars', 'utf8');
var blogPage = fs.readFileSync('./views/blogPage.handlebars', 'utf8');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/Blog.html', function(req, res){

  var templateArgs = {
    bloggy: blogData
  };
  res.render('blogPage', templateArgs);
});

app.get('/Blog/:index', function(req, res){
  console.log(req.params);
  var idx = req.params.index;
  var blog = blogData[idx];

  if(blog){
    var templateArgs = {
      bloggy: [blog],
    };
    res.render('blogPage', templateArgs);
  }

  else
      res.status(404).render('404Page');

});

app.post('/Blog/addPost', function (req,res,next){
  var blog = blogData;
  if(blog){

    if(req.body) {

      var posty = {
        Title: req.body.Title,
        Datee: req.body.Datee,
        Content: req.body.Content
      };

      blog = blog || [];
      blog.push(posty);

      fs.writeFile('blog.json', JSON.stringify(blogData), function(err){
        if(err){
          res.status(500).send("Unable to save post to \"database\".");
        }
        else{
          res.status(200).send();
        }
      });

    } else {
      next();
    }
}

});


app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function (){
  console.log("Server listening on port ", port);
});
