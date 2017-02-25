//words that will be part of our game
var wordList = [
  "pine",
  "oak",
  "alder",
  "redwood"
];
//randomly choose a word to populate the game
var chosenWord = "";
//break the chosen word into individual letters for guessing
var lettersInChosenWord = [];
//number of blanks respective to chosen word
var numBlanks = 0;
//track number of correct guesses
var blanksAndSuccesses = [];
//store the wrong guesses made by the player
var wrongGuesses = [];
//obvious stuff here
var winCounter = 0;
var lossCounter = 1;
var numGuesses = 9;

function startGame(){
	//numguesses always equals 9, and blankandsuccess is an empty array, and wrongguesses is empty as well
	
	var wrongGuesses = [];
	var numGuesses = 9;
	var blanksAndSuccesses = [];

	
	
	//select a word at random
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	//want to break up that random word into letters
	lettersInChosenWord = chosenWord.split("");
	//
	numBlanks = lettersInChosenWord.length;
	console.log("this is chosen word", chosenWord);
	console.log("this is blanks", numBlanks);
	console.log("these are letters", lettersInChosenWord)
	//we want to add those underscores to the HTML
	for(var i = 0; i < numBlanks; i++) {
	  blanksAndSuccesses.push("_");
	}
	
	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
	console.log("blanks and successess", blanksAndSuccesses);
	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

}


//}

function checkLetters (letter) {
	//starts with the variable "letterInWord" being false by default
 	var letterInWord = false;
 	//checks the chosen letter against the letters in the chosen word
	for (var i = 0; i < numBlanks; i++) {
		if (chosenWord[i] === letter){
			letterInWord = true;
		}
	} 

	if (letterInWord){
		for (i = 0; i < numBlanks; i++) {
			if (chosenWord[i] === letter){
			blanksAndSuccesses[i] = letter;
			}	
		//console.log("inside our checkletter function", blanksAndSuccesses)
		}
	}

	else {
		numGuesses--;
		wrongGuesses.push(letter);
	}
	//console.log("our wrong guesses in checkletter function", wrongGuesses)
	//to check if a letter is already in the wrong guesses array, we want to set up an if/ese conditional that wil run a for loop that will iterate over all the ltters and then use the if/else to chekc if it already exists
}
/*
1.compare the letter the user picks matches any of the letters in the word
2.want a conditional statement to determine if the letter the user picked is in the word. If so, do something if not, do something else
3.if the user is wrong we want to decrease the numGuesses variables by one
4.will need an input from the user
*/
//}

function roundComplete() {

	
	
	if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
		winCounter++;
		alert("You Win!");
		document.getElementById('win-counter').innerHTML = winCounter;
		startGame();
		//alert("You Win!!");
	} else if (numGuesses === 0) {
		document.getElementById('loss-counter').innerHTML = lossCounter++;
		alert("you dont have any more guesses");
		startGame();
	}
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = numGuesses;
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
	console.log(lettersInChosenWord, "letters in chosen word");
	console.log(blanksAndSuccesses, "blanks and successes");
}


/*
1.it's going to update the HTML with letters that are in the word
2.it's going to update the HTML with guesses we have left
3.it's going to update the HTML to show the wrong guesses
4.it's going to determine whether the user won the game or not
*/
//}

startGame();
document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the typed letter", letterGuessed);
	checkLetters(letterGuessed);
	roundComplete();
	
}
	

/*
1.it's going to take in the letter that we type in
2.it's going to pass it through the checkLetter function
*/