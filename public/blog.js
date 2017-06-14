var blogButton = document.getElementById('create-blog-button');
var hiddenStuff = document.getElementsByClassName('hidden');
var allElems = [];

blogButton.addEventListener('click', function (){
  for(var i =0; i<hiddenStuff.length; i+=1){
    hiddenStuff[i].style.display = 'block';
  }
});

var closeButton = document.querySelector('button.modal-close-button');
var cancelButton = document.querySelector('button.modal-cancel-button');

closeButton.addEventListener('click', function(){
  for(var j =0; j<hiddenStuff.length; j+=1){
    hiddenStuff[j].style.display = 'none';
  }
  document.getElementById('blog-title-input').value = "";
  document.getElementById('blog-date-input').value = "";
  document.getElementById('blog-content-input').value = "";
});

cancelButton.addEventListener('click', function(){
  for(var j =0; j<hiddenStuff.length; j+=1){
    hiddenStuff[j].style.display = 'none';
  }
  document.getElementById('blog-title-input').value = "";
  document.getElementById('blog-date-input').value = "";
  document.getElementById('blog-content-input').value = "";
});

function generateNewElem(userTitle, userDate, userContent) {

  var blogTemplate = Handlebars.templates.blogss;
  var blogData = {
    Title: userTitle,
    Datee: userDate,
    Content: userContent
  };

  return blogTemplate(blogData);

}

function createBlog(userTitle, userDate, userContent) {

      var newElem = generateNewElem(userTitle, userDate, userContent);
      var blogContainer = document.querySelector('.Blog-container');
      blogContainer.insertAdjacentHTML('beforeend', newElem);
      allElems.push(newElem);

}

var ElemsCollection = document.getElementsByClassName('Blogg');
for (var i = 0; i < ElemsCollection.length; i++) {
  allElems.push(ElemsCollection[i]);
}

var acceptButton = document.querySelector('button.modal-accept-button');

acceptButton.addEventListener('click', function(){

  var userTitle = document.getElementById("blog-title-input").value;
  var userDate = document.getElementById("blog-date-input").value;
  var userContent = document.getElementById("blog-content-input").value;

  if(userTitle == "" || userDate == "" || userContent == "")
  {
    alert("Fields cannot be empty");
  }
  else{

    storeBlogPost(userTitle, userDate, userContent, function(err){
      if(err){
        alert("got this error:\n\n" + err);
      }
      else{
            createBlog(userTitle, userDate, userContent);
      }
    });

    for(var k=0; k<hiddenStuff.length; k+=1){
      hiddenStuff[k].style.display = 'none';
    }
    document.getElementById('blog-title-input').value = "";
    document.getElementById('blog-date-input').value = "";
    document.getElementById('blog-content-input').value = "";
  }
});

function storeBlogPost(userTitle, userDate, userContent, callback){
  /* var postURL = "/Blog" + index?? + "/addPost";
    var postRequest = new XMLHHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function(event)){
    var error;
    if(event.target.status !== 200){
      error = event.target.response;
    }
  callback(error);
});

var blogBody = {
    Title: userTitle,
    Datee: userDate,
    Content: userContent
}
    postRequest.send(JSON.stringigy(blogBody));

}  */

var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function (){

  var filterText = document.getElementById('navbar-search-input').value;

  var blogElements = document.getElementsByClassName('Blogg');
  var bContainer = document.getElementsByClassName('Blog-container')[0];

  for (i = blogElements.length - 1; i >= 0; i--) {
      var e = blogElements.item(i);
      var bT = e.getElementsByClassName('BlogTitle')[0];
      var bD = e.getElementsByClassName('BlogDate')[0];
      var bC = e.getElementsByClassName('BlogContent')[0];
      var bTitle = bT.textContent;
      var bDate = bD.textContent;
      var bContent = bC.textContent;
      if(bContent.includes(filterText) || bDate.includes(filterText) || bTitle.includes(filterText)) {
          console.log("Found");
      }
      else {
        bContainer.removeChild(e);
      }
  }
});
