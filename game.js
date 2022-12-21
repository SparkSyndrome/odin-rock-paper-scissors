const GAME_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerSelection = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  return computerSelection;
}

function getPlayerChoice() {
  const playerSelection = prompt("Please select 'rock', 'paper', or 'scissors':").toLowerCase();
  return playerSelection;
}

function checkWinner(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return "tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
    return "player";
  } else {
    return "computer";
  }
}

function declareWinner(winner) {
  if (winner == "tie") {
    return "It's a tie.";
  } else if (winner == "player") {
    return "You win!"
  } else {
    return "You lose!"
  }
}


// Broken. Sometimes randomly determines the winning move to be scissors, when paper and rock are chosen by the computer/player.
function determineWinningMove(winner) {
  if (winner == "player") {
    return getPlayerChoice();
  } else if (winner == "computer") {
    return getComputerChoice();
  } else {
    return ""
  }
}

function winMethod(winningMove) {
  if (winningMove == "rock") {
    return "Rock beats scissors!";
  } else if (winningMove == "scissors") {
    return "Scissors beats paper!";
  } else if (winningMove == "paper") {
    return "Paper beats rock!"
  } else {
    return ""
  }
}

function playRound(computerSelection, playerSelection) {
  const winner = checkWinner(computerSelection, playerSelection);
  const winningMove = determineWinningMove(winner);
  const winningMethod = winMethod(winningMove);
  console.log(computerSelection);
  console.log(playerSelection);
  console.log(winner);
  console.log(declareWinner(winner));
  console.log(winningMove);
  console.log(winningMethod);
}
// Return string that declares the winner
playRound(getComputerChoice(), getPlayerChoice());