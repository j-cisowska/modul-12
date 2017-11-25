var button = document.getElementById('getTheJoke');
var paragraph = document.getElementById('joke');


var url = 'https://api.icndb.com/jokes/random';


button.addEventListener('click', function(){
       getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open ('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
    
  });
  xhr.send();
}

