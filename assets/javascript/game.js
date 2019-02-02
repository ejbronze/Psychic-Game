var lettersGuessed = [];
var guessesLeft = 9;
var wins = 0;
var loss = 0;

//use Math.random method along with String.fromCharCode method to generate a random letter
var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);

console.log(computerGuess);
//function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
  var keyPress = String.fromCharCode(event.keyCode).toLowerCase();

  //document.getElementById('guess').innerHTML = keyPress;
  addLetter(keyPress);
};

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter(usersKeypress) {
  var repeatGuess = lettersGuessed.some(function(item) {
    return item === usersKeypress;
  });

  //alert player if the above code is true.
  if (repeatGuess) {
    alert(usersKeypress + " already guessed. Try again!");

    //if it is not a repeat guess, check if it's in word
  } else {
    lettersGuessed.push(usersKeypress);
    console.log(lettersGuessed);

    //show user's input in browser
    showLettersGuessed();
    //is user's input a match to computer guess
    guessMatch(usersKeypress);
  }
}

//function to show letters guessed in browser
function showLettersGuessed() {
  var tempStr = lettersGuessed.join(", ");
  document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character) {
  console.log(character);
  console.log(computerGuess);

  if (character === computerGuess) {
    alert("You win!");
    wins = wins + 1;
    showWins();
    //toggleGame();
  } else if (guessesLeft === 0) {
    alert("Aw man! Lets start over.");
    resetVariables();
    showLoss();
  } else {
    guessesLeft = guessesLeft - 1;
    showGuessesRemaining();
  }
}

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = wins;
}
//function to show losses
function showLoss() {
  document.getElementById("numLoss").innerHTML = loss;
}
//function to show guesses remaining
function showGuessesRemaining() {
  document.getElementById("numGuesses").innerHTML = guessesLeft;
}

function resetVariables() {
  lettersGuessed = [];
  guessesLeft = 10;
}

function startGame() {
  showGuessesRemaining();
  showWins();
}

startGame();
