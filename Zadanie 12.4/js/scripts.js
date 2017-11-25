//$(document).ready(function() {

 /* function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}*/ //APP
  
  /*  function Column(name) {
    var self = this; 

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
    	// tworzenie kolumn
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').addClass('btn btn-danger').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').addClass('btn btn-success').text('Add a card');
   
      // nasłuchiwacze
	  
	  //usunięcie kolumny
    $columnDelete.click(function() {
        self.removeColumn();
    });
	//dodanie karty w kolumnie
    $columnAddCard.click(function(event) {
        self.addCard(new Card(prompt("Enter the name of the card")));
    });
      
    // połączenie w jedno
      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);

      // zwróć stworzoną kolumnę
      return $column;
      
      
    }//create column closing
   
  }//column name closing
  
    //dodanie karty w liście i połączenie
    Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
	//usunięcie kolumny
    removeColumn: function() {
      this.$element.remove();
    }
}; // COLUMN JS
  

/* function Card(description) {
	var self = this; 

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    function createCard() {
    	// składowe karty, tworzymy kartę
    var $card = $('<li>').addClass('card');
    var $cardDescription = $('<p>').addClass('card-description').text(self.description);
    var $cardDelete = $('<button>').addClass('btn-delete').addClass('btn btn-danger').text('x');
      
      $cardDelete.click(function(){
        self.removeCard();
});
      
      $card.append($cardDelete)
	.append($cardDescription);
return $card;
      
    }//create card closing
   
}//card prototype closing
  
  Card.prototype = {
	removeCard: function() {
		this.$element.remove();
   }//remove card closing
  
}//card description */ //CARD.JS

//tablica 
/*var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};
 
 function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
  
  $('.create-column')
  .click(function(){
	var name = prompt('Enter a column name');
	var column = new Column(name);
    	board.addColumn(column);
  }); *///BOARD
  
  /*// stworzenie kolumn
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
*/ //APP
//})
//https://codepen.io/anon/pen/XzqrVr