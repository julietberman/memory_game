
console.log("JS file is connected to HTML! Woo!")


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

function createBoard(){
for (var i = 0; i < cards.length; i++)
	{
    var cardElement = document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/Kingcard.png'>"; 
	} else {
		this.innerHTML = "<img src='images/Queencard.png'>";
	}
	if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
    		
  	}
}

function isMatch (x) {
 if (x[0] === x[1]){
    alert("You found a match!");
    
  } else {
    alert("Sorry, try again.");
    }
 	
	var btn = document.createElement("BUTTON");
	var play = document.createTextNode("PLAY AGAIN");       
	btn.appendChild(play); 
    document.getElementById("playagain").appendChild(btn);
    btn.addEventListener('click', clearBoard);
}

function clearBoard(){
	location.reload();
	}
	

createBoard();



