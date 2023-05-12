const computerSelection = getComputerChoice();
const playerSelection = console.log(prompt('Please enter "Rock", "Paper", or "Scissors').toLowerCase());

function getComputerChoice() {
  const GAME_OPTIONS = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = GAME_OPTIONS[Math.floor(Math.random() * GAME_OPTIONS.length)];
  console.log(computerChoice);
}