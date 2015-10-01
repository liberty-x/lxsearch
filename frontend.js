(function(){
  var searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
      return searchBar.value;
    }
  });
}());
