//Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose.
//create array 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//comp selects a letter from the array
var compChoice = 0;
randomComp();

//----------------------------------------------------------------------------------------------------------
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var userGuesses = [];


//function time--ie, the results
function randomComp() {
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log (compChoice);
}
        //Wins: (# of times the user has guessed the letter correctly)
function userWon() {
        alert("Congratulations, you beat a computer!");
        userWins++;
        resetGame();
        document.getElementById("winner").innerHTML = userWins;
}

        //Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
function usertheLoser() {
        userLosses++;
        resetGame();
        document.getElementById("luoozuhur").innerHTML = userLosses;
}

        //Reset the game.  Guesses back to 9 and ready for new user guess.
function resetGame() {
        guessesLeft = 9;
        userGuesses = [];
        randomComp();
}


//-----------------------------Moving On---------------------------------------------------------------

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;

        //Array Guesses
        userGuesses.push(userGuess);
        var stringGuesses = userGuesses.join(" ");
        document.getElementById("questionableChoices").innerHTML = stringGuesses;


        
        //IF userGuess==computerChoice, return "win"
        if (userGuess == compChoice) {
                userWon();
        }
        //ELSE if guess wrong 10 times, user loses
        else {
                guessesLeft--;
                document.getElementById("conjecturesLeft").innerHTML = guessesLeft;


        //Guesses Left: (# of guesses left.This will update)
        if (guessesLeft == 0) {
                usertheLoser();
                }
        }
}

//------------------------------------------More Directions--------------------------------------------------------------
        //Your Guesses So Far: (the specific letters that the user typed.Display these until the user either wins or loses.)


        //When the player wins, increase the Wins counter and start the game over again(without refreshing the page).
        //Increase wins
        //Refresh game, not page

        //When the player loses, increase the Losses counter and restart the game without a page refresh
        //(just like when the user wins).

