const GAME_OPTIONS = ["rock", "paper", "scissors"];

// function game() {
//   let computerScore = 0;
//   let playerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = getPlayerChoice();
//     playRound(playerSelection, computerSelection);
//     if (playRound(playerSelection, computerSelection) == `Player wins! ${playerSelection} beats ${computerSelection}!`) {
//       playerScore++;
//     } else if (playRound(playerSelection, computerSelection) == `Computer wins! ${computerSelection} beats ${playerSelection}!`) {
//       computerScore++;
//     }
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
//     console.log("--------------------------------------")
//   }
//   console.log(finalWinner(playerScore, computerScore));
// }

function getComputerChoice() {
  const computerChoice = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  return computerChoice;
}

function getPlayerChoice() {
  let validInput = false;
  while (validInput == false) {
    const playerChoice = prompt("Please enter 'rock', 'paper', or 'scissors' in the field below: ").toLowerCase();
    if (playerChoice == null) {
      continue;
    }
    if (GAME_OPTIONS.includes(playerChoice)) {
      validInput = true;
      return playerChoice;
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
    return `Player wins! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
  }
}

function finalWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Congratulations! You beat the computer."
  } else if (computerScore > playerScore) {
    return "Sorry loser, the computer beat you."
  } else if (computerScore == playerScore) {
    return "It was a tie. Try again!"
  }
}

// game();