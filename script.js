//Query Selector: Returns the first element within the document

// JavaScript code (script.js)

// Variables to track scores
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 10;
// Prompt for the player's name
//let playerName = prompt("Please enter your name:");

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = computerPlay();
}

    document.getElementById('userName').textContent = playerName;
// Function to generate computer's choice randomly
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    // Update the UI to display the choices
    //${playerSelection.toUpperCase()}: This part evaluates the playerSelection variable and converts it to uppercase using the toUpperCase() method. 
    document.querySelector('.result').innerHTML = `
        You chose ${playerSelection.toUpperCase()} <br> 
        Computer chose ${computerSelection.toUpperCase()}
    `;

    // This block determines the winner of the round based on the choices made by the player and the computer and updates the scores accordingly. 
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        document.querySelector('.result').innerHTML += '<br> You win!';
    } else if (playerSelection === computerSelection) {
        document.querySelector('.result').innerHTML += '<br> It\'s a tie!';
    } else {
        computerScore++;
        document.querySelector('.result').innerHTML += '<br> Computer wins!';
    }

    // Update the scores displayed on the UI
    document.querySelector('.p-count').textContent = playerScore;
    document.querySelector('.c-count').textContent = computerScore;

    // Decrease the rounds left
    roundsLeft--;

    // Update rounds left on UI
    document.querySelector('.movesleft').textContent = `Moves Left: ${roundsLeft}`;

    // This checks if all rounds have been played, and if so, it calls the declareWinner() function to determine and display the overall winner.
    if (roundsLeft === 0) {
        declareWinner();
    }
}

// The remaining code defines functions to declare the winner after all rounds are played, to reset the game, and to set event listeners for the buttons used in the game.


// Function to declare the winner after all rounds are played
function declareWinner() {
    // Disable the buttons to prevent further play
    document.querySelectorAll('.custombutton2').forEach(button => {
        button.disabled = true;
    });

    // Display the overall winner
    let winnerMessage = '';
    if (playerScore > computerScore) {
        winnerMessage = 'Congratulations! You win the game!';
    } else if (playerScore < computerScore) {
        winnerMessage = 'Computer wins the game!';
    } else {
        winnerMessage = 'It\'s a tie!';
    }
    document.querySelector('.result').innerHTML += `<br> ${winnerMessage}`;
}

// Function to reset the game
function resetGame() {
    // Reset scores and rounds left
    playerScore = 0;
    computerScore = 0;
    roundsLeft = 10;

    // Reset scores displayed on UI
    document.querySelector('.p-count').textContent = playerScore;
    document.querySelector('.c-count').textContent = computerScore;

    // Reset rounds left on UI
    document.querySelector('.movesleft').textContent = `Moves Left: ${roundsLeft}`;

    // Reset result displayed on UI
    document.querySelector('.result').textContent = '';

    // Enable the buttons
    document.querySelectorAll('.custombutton2').forEach(button => {
        button.disabled = false;
    });
}

// Event listeners for buttons
document.querySelectorAll('.custombutton2').forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.classList[0]);
    });
});

// Event listener for reset button
document.querySelector('.reload').addEventListener('click', resetGame);