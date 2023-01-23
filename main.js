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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('mousedown', e => {
  button.style.backgroundColor = 'rgba(51, 51, 51, 0.55)';
  button.style.boxShadow = '0 0 20px 10px white';
}));

buttons.forEach(button => button.addEventListener('mouseup', e => {
  console.log(playRound(e.target.id, getComputerChoice()));
  button.style.backgroundColor = '';
  button.style.boxShadow = '';
}));