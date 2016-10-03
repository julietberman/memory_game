
console.log("JS file is connected to HTML! Woo!")

var cardElement;
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

function createBoard(){
for (var i = 0; i < cards.length; i++)
	{
    cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.innerHTML= '<img src= "images/PlayCardDesign.png">';
	gameBoard.appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    console.log(cardElement);
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

function clearBoard() {
	document.getElementById("playagain").innerHTML="";
	document.getElementById("game-board").innerHTML="";
	createBoard();
}

createBoard();	
