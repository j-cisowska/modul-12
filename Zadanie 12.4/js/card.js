//KLASA OD KARTY


function Card(id, name) {
	var self = this; 

    this.id = id;
	this.name = name || 'No name given';
    this.$element = createCard();

    function createCard() {
    	// składowe karty, tworzymy kartę
    var $card = $('<li>').addClass('card');
    var $cardDescription = $('<p>').addClass('card-description').text(self.name);
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
		var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.removeCard(Card); //self.element.remove();
      }
    });
   }//remove card closing
  
}//card description 





/*function Card(description) {
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
  
}//card description */