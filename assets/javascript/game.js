

//list of variables
var wordList = []
var chosenWord;
var wrongGuesses = [];
var blanksAndSuccesses = [];
var guessesRemaining = "";
var winCounter = 0;
var lossCounter = 0;

var hWrongGuesses = document.getElementById('wrong-guesses');
var hBlanksAndSuccesses = document.getElementById('word-blanks');
var hGuessesRemaining = document.getElementById('guesses-left');

//runs the startGame function...
startGame();

function startGame() {

	//our vocabulary list for the game
	var wordList = [
	  'pine',
	  'oak',
	  'alder',
	  'redwood',
	  'juniper',
	  'tamarak'
	];

	var chosenWord = [];
	var wrongGuesses = [];
	var blanksAndSuccesses = []
	var guessesRemaining = 10;

	//randomly chooses word for wordList array
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(chosenWord)

	//pushes an underscore for every letter in the chosen word onto to html page
	for (var i = 0; i < chosenWord.length; i++) {
		blanksAndSuccesses.push('_');
		console.log(blanksAndSuccesses, "here")
	}

	hBlanksAndSuccesses.innerHTML = blanksAndSuccesses.join(' ');
	hGuessesRemaining.innerHTML = guessesRemaining;

	//stores onkeyup information
	document.onkeyup = function(event) {			

		var letterGuessed = event.key.toLowerCase();
		console.log(letterGuessed)

		guessesRemaining--;

		//runs through index of each letter in chosen word and compares the letter to the guess made by player
		for (var i = 0; i < chosenWord.length; i++) {
			if (chosenWord[i] === letterGuessed) {
				//replaces underscore with corresponding letter
				blanksAndSuccesses[i] = letterGuessed;
			}

			hBlanksAndSuccesses.innerHTML = blanksAndSuccesses.join(' ');
			hGuessesRemaining.innerHTML = guessesRemaining;

		}

		//alerts the player that they won if there are no underscores found in the blanksAndSuccesses variable, and resets the game
		if (blanksAndSuccesses.indexOf('_') === -1) {
			winCounter++	
			alert('You WIN!')
			wrongGuesses = []
			startGame();
		} 
		//if the index of the guessed letter does not exist in the chosen word, then the incorrect guess is stored and pushed to the html
		if (chosenWord.indexOf(letterGuessed) === -1) {
			wrongGuesses.push(letterGuessed)
		}

		//when there are no more guesses remaining, the player loses and the games resets
		if (guessesRemaining === 0) {
			lossCounter++
			alert('Sorry, please try again!')
			wrongGuesses = []
			startGame();
		}
		document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ')
		document.getElementById('win-counter').innerHTML = winCounter;
		document.getElementById('loss-counter').innerHTML = lossCounter;
	};
}		