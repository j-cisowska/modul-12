  // OGÓLNA FUNKCJA
  //nówka
  var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2514',
  'X-Auth-Token': '36707f8def798f30dd44cb2bd13072a8'
};

$.ajaxSetup({
	headers: myHeaders
});


$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});


function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.addColumn(col);
		setupCards(col, column.cards);
    });
}
  
  function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.addCard(card);
  	})
}
  
  
  /*function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

  // stworzenie kolumn
var toDoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// dodanie kolumn
board.addColumn(toDoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// tworzenie kart
var card1 = new Card('Create a card');
var card2 = new Card('Create a card');
var card3 = new Card('Create a card');

// dodawanie kart do kolumn
toDoColumn.addCard(card1);
doingColumn.addCard(card2);
doneColumn.addCard(card3);

//https://codepen.io/anon/pen/XzqrVr */