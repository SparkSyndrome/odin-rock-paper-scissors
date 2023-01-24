const buttons = document.querySelectorAll('button');
const roundWinner = document.querySelector('.result');
const keepScore = document.querySelector('.keep-score');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const GAME_OPTIONS = ["rock", "paper", "scissors"];
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

function handleKeepScore(roundWinner) {
  if (roundWinner.innerText.includes('Player wins!')) {
    playerScore += 1;
  } else if (roundWinner.innerText.includes('Computer wins!')) {
    computerScore += 1;
  }

  keepScore.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    keepScore.innerText = finalWinner(playerScore, computerScore);
    roundWinner.remove();
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

buttons.forEach(button => button.addEventListener('mousedown', () => {
  roundWinner.innerText = "";
  button.style.backgroundColor = 'rgba(51, 51, 51, 0.55)';
  button.style.boxShadow = '0 0 20px 10px white';
}));

buttons.forEach(button => button.addEventListener('mouseup', e => {
  roundWinner.innerText = (playRound(e.target.id, getComputerChoice()));
  button.style.backgroundColor = '';
  button.style.boxShadow = '';
  handleKeepScore(roundWinner);
}));
