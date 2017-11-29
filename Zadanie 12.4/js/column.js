  //KOLUMNA
  
  function Column(id, name) {
    var self = this; 

    this.id = id;
    this.name = name || 'No name given';
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
        var cardName = prompt("Enter the name of the card");
		event.preventDefault();
		$.ajax({
			url: baseUrl + '/card',
			method: 'POST',
			data: {
			name: cardName,
			bootcamp_kanban_column_id: self.id
			},
			success: function(response) {
			var card = new Card(response.id, cardName);
			self.addCard(card);
    }
});
    });
      
    // połączenie w jedno
      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);

      // zwróć stworzoną kolumnę
      return $column;
      
      
    }
   
  }
  
    //dodanie karty w liście i połączenie
    Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
	//usunięcie kolumny
    removeColumn: function() {
      var self = this;
    $.ajax({
      url: baseUrl + '/column/' + self.id,
      method: 'DELETE',
      success: function(response){
        self.$element.remove();
      }
    });
   }
}; 
  
  