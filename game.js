const GAME_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoice = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  return computerChoice;
}

// function getPlayerChoice() {
//   const playerChoice = prompt("Please select 'rock', 'paper', or 'scissors':").toLowerCase();
//   return playerChoice;
// }

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const winner = checkWinner(playerSelection, computerSelection);
  if (winner == "tie") {
    return "It's a tie.";
  } else if (winner == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));