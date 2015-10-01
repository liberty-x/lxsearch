function searchBarValue(){
  var userInput = document.getElementById('searchBar').value;
  if (userInput.length > 2){
    sendInputToServer(userInput);
  }
}

function sendInputToServer(userInput){
  var out = new XMLHttpRequest();
  out.onreadystatechange = function(){
    if (out.readyState === 4 && out.status === 200){
      console.log(out.responseText);
      // document.getElementsByClassName('results').innerHTML = out.responseText;
    }
  };
  out.open('GET', '/' + userInput);
  out.send();
}

document.getElementById('searchBar').addEventListener("keyup",function(e){
  searchBarValue();
});
