const GAME_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const ComputerChoice = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  return ComputerChoice;
}

function getPlayerChoice() {
  let validInput = false;
  while (validInput == false) {
    const PlayerChoice = prompt("Please type 'rock', 'paper', or 'scissors':").toLowerCase();
    if (PlayerChoice == null) {
      continue;
    }
    if (GAME_OPTIONS.includes(PlayerChoice)) {
      validInput = true;
      return PlayerChoice
    }
  }
  return PlayerChoice;
}

function checkWinner(PlayerSelection, ComputerSelection) {
  if (PlayerSelection == ComputerSelection) {
    return "tie";
  } else if (
    (PlayerSelection == "rock" && ComputerSelection == "scissors") ||
    (PlayerSelection == "scissors" && ComputerSelection == "paper") ||
    (PlayerSelection == "paper" && ComputerSelection == "rock")
    ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(PlayerSelection, ComputerSelection) {
  const Winner = checkWinner(PlayerSelection, ComputerSelection);
  if (Winner == "tie") {
    return "It's a tie.";
  } else if (Winner == "player") {
    return `You win! ${PlayerSelection} beats ${ComputerSelection}!`;
  } else {
    return `You lose! ${ComputerSelection} beats ${PlayerSelection}!`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Let's play rock, paper scissors!");
  for (let i = 0; i < 5; i++) {
    const PlayerSelection = getPlayerChoice();
    const ComputerSelection = getComputerChoice();
    console.log(playRound(PlayerSelection, ComputerSelection));
    if (checkWinner(PlayerSelection, ComputerSelection) == "player") {
      playerScore++;
    } else if (checkWinner(PlayerSelection, ComputerSelection) == "computer") {
      computerScore++;
    }
    console.log(`Player: ${playerScore} ` + `Computer: ${computerScore}`);
  }
  console.log("Game Over");
  if (playerScore == computerScore) {
    console.log("You and the computer tied.");
  } else if (playerScore > computerScore) {
    console.log("Player was the winner!");
  } else {
    console.log("Computer was the winner!");
  }
}

game();