var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function (){

  var filterText = document.getElementById('navbar-search-input').value;

  var projectElements = document.getElementsByClassName('project');
  var pContainer = document.getElementsByClassName('projects-container')[0];

  for (i = projectElements.length - 1; i >= 0; i--) {
      var e = projectElements.item(i);
      var pN = e.getElementsByClassName('project-name')[0];
      var pC = e.getElementsByClassName('project-text')[0];
      var pContent = pC.textContent;
      var pName = pN.textContent;
      if(pContent.includes(filterText) || pName.includes(filterText)) {
          console.log("Found");
      }
      else {
        pContainer.removeChild(e);
      }
  }
});
