// JavaScript code (scriptj.js)

// Variables to track scores
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 10;

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
    document.querySelector('.result').innerHTML = `
        You chose ${playerSelection.toUpperCase()} <br>
        Computer chose ${computerSelection.toUpperCase()}
    `;

    // Determine the winner of the round
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

    // Check if rounds left are 0 and display the final result
    if (roundsLeft === 0) {
        declareWinner();
    }
}

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
