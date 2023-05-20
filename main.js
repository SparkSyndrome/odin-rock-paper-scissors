const buttons = document.querySelectorAll('button');
const score = document.querySelector('.keep-score');
const roundWinner = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const GAME_OPTIONS = ['rock', 'paper', 'scissors'];
  const computerChoice = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!"
  } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
    return `Congratulations, you won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
  } else {
    return `Sorry, you're a loser. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
  }
}

function handleScore(roundWinner) {
  if (roundWinner.innerText.includes("Congratulations, you won!")) {
    playerScore += 1;
  } else if (roundWinner.innerText.includes("Sorry, you're a loser.")) {
    computerScore += 1;
  }

  score.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    roundWinner.innerText = declareWinner(playerScore, computerScore);
    buttons.forEach(button => {
      button.disabled = true;
      button.classList.add('no-hover');
    });
  }
}

function declareWinner(playerScore, computerScore) {
  if (playerScore == computerScore) {
    return "Game Over: It's a tie!"
  } else if (playerScore > computerScore) {
    return "Game Over: Congratulations, you won!"
  } else {
    return "Game Over: Sorry, you're a loser."
  }
}

buttons.forEach(button => button.addEventListener('mousedown', () => {
  button.style.backgroundColor = 'rgba(51, 51, 51, 0.5)';
  button.style.boxShadow = '0 0 20px 10px white';
}))

buttons.forEach(button => button.addEventListener('mouseup', e => {
  button.style.backgroundColor = '';
  button.style.boxShadow = '';
  roundWinner.innerText = (playRound(e.target.id, getComputerChoice()));
  handleScore(roundWinner);
}))