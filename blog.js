var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function (){

  var filterText = document.getElementById('navbar-search-input').value;

  var blogElements = document.getElementsByClassName('Blogg');
  var bContainer = document.getElementsByClassName('Blog-container')[0];

  for (i = projectElements.length - 1; i >= 0; i--) {
      var e = projectElements.item(i);
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
        pContainer.removeChild(e);
      }
  }
});
