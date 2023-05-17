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
    return `Congratulations, you won! ${playerSelection} beats ${computerSelection}.`
  } else {
    return `Sorry, you're a loser. ${computerSelection} beats ${playerSelection}.`
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
    score.innerText = declareWinner(playerScore, computerScore)
    roundWinner.remove();
  }
}

function declareWinner(playerScore, computerScore) {
  if (playerScore == computerScore) {
    return "It's a tie!"
  } else if (playerScore > computerScore) {
    return "Congratulations, you won!"
  } else {
    return "Sorry, you're a loser."
  }
}

buttons.forEach(button => button.addEventListener('mousedown', () => {
  roundWinner.innerText = "";
  button.style.backgroundColor = 'rgba(51, 51, 51, 0.5)';
  button.style.boxShadow = '0 0 20px 10px white';
}))

buttons.forEach(button => button.addEventListener('mouseup', e => {
  roundWinner.innerText = (playRound(e.target.id, getComputerChoice()));
  button.style.backgroundColor = '';
  button.style.boxShadow = '';
  handleScore(roundWinner);
}))