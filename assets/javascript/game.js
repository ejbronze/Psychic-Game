// var lettersGuessed = [];
// var guessesLeft = 9;
// var wins = 0;
// var loss = 0;

const state = {
  lettersGuessed: [],
  guessesLeft: 9,
  wins: 0,
  loss: 0,
  computerGuess: String.fromCharCode(Math.round(Math.random() * 26) + 97)
};

//use Math.random method along with String.fromCharCode method to generate a random letter
// var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);

console.log(state.computerGuess);
//function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
  var keyPress = String.fromCharCode(event.keyCode).toLowerCase();

  //document.getElementById('guess').innerHTML = keyPress;
  addLetter(keyPress);
};

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter(usersKeypress) {
  var repeatGuess = state.lettersGuessed.some(function(item) {
    return item === usersKeypress;
  });

  //alert player if the above code is true.
  if (repeatGuess) {
    alert(usersKeypress + " already guessed. Try again!");

    //if it is not a repeat guess, check if it's in word
  } else {
    state.lettersGuessed.push(usersKeypress);
    console.log(state.lettersGuessed);

    //show user's input in browser
    showLettersGuessed();
    //is user's input a match to computer guess
    guessMatch(usersKeypress);
  }
}

//function to show letters guessed in browser
function showLettersGuessed() {
  var tempStr = state.lettersGuessed.join(", ");
  document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character) {
  console.log(character);
  console.log(state.computerGuess);

  if (character === state.computerGuess) {
    alert("You win!");
    state.wins = state.wins + 1;
    showWins();
    resetVariables(state);
    //toggleGame();
  } else if (state.guessesLeft === 0) {
    alert("Aw man! Lets start over.");
    state.loss = state.loss + 1;
    showLoss();
    resetVariables(state);
  } else {
    state.guessesLeft = state.guessesLeft - 1;
    showGuessesRemaining();
  }
}

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = state.wins;
}
//function to show losses
function showLoss() {
  document.getElementById("numLoss").innerHTML = state.loss;
}
//function to show guesses remaining
function showGuessesRemaining() {
  document.getElementById("numGuesses").innerHTML = state.guessesLeft;
}

function resetVariables(state) {
  state.lettersGuessed = [];
  state.guessesLeft = 10;
  state.computerGuess = String.fromCharCode(
    Math.round(Math.random() * 26) + 97
  );
}
//Function to display the default value for each item at the beginning of the game
function startGame() {
  showGuessesRemaining();
  showWins();
  showLoss();
}

startGame();
