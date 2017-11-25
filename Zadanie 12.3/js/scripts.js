$(document).ready(function() {
  
  var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
  
  $('#search').click(searchCountries);
  
  function searchCountries() {
  	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    
    
    $.ajax({
		GET: 'https://restcountries.eu/rest/v2/name/', //???
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
	
	
	 function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
      });
    }
  
	
  }
  
  
 
});

//https://codepen.io/anon/pen/rYKJar