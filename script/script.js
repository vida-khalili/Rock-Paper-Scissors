let playerName;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

//player name input
let playerNameInput = document.querySelector(".player-name-input");

//player name
let gamePlayerName = document.querySelector(".game-player-name");

// computer choice image
let computerChoiceImage = document.getElementById("computer-choice-image");

//player choice image
let playerChoiceImage = document.getElementById("player-choice-image");

//player score span
let playerScoreBox = document.getElementById("player-score");

//computer score span
let computerScoreBox = document.getElementById("computer-score");

//winner message
let winnerMessage = document.querySelector(".winner-message");

function getPlayerName(event) {
  event.preventDefault();
  playerName = playerNameInput.value;
  if (playerName !== "") {
  } else {
    playerName = "Player";
  }
  gamePlayerName.innerHTML = playerName;
}

function startGame(event) {
  getPlayerName(event);
  document.querySelector(".homepage-parts").style.display = "none";
  document.querySelector(".game-box").style.display = "flex";
}

function backToHome() {
  document.querySelector(".game-box").style.display = "none";
  document.querySelector(".homepage-parts").style.display = "grid";
}

const setComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceImage.src = `./images/${computerChoice}.png`;
};

const setScore = () => {
  if (playerScore < 5 && computerScore < 5) {
    if (playerChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      computerScoreBox.innerHTML = computerScore;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerScore += 1;
      playerScoreBox.innerHTML = playerScore;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      computerScoreBox.innerHTML = computerScore;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore += 1;
      playerScoreBox.innerHTML = playerScore;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      computerScoreBox.innerHTML = computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore += 1;
      playerScoreBox.innerHTML = playerScore;
    }
  }
};
const checkWinner = () => {
  if (playerScore === 5 && computerScore < 5) {
    winnerMessage.innerHTML = `${playerName} is the winner!`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5 && playerScore < 5) {
    winnerMessage.innerHTML = "computer is the winner!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5 && playerScore === 5) {
    winnerMessage.innerHTML = `it's a draw!`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
};

const setRock = () => {
  playerChoice = "rock";
  playerChoiceImage.src = `./images/${playerChoice}.png`;
  setComputerChoice();
  setScore();
  checkWinner();
};

const setPaper = () => {
  playerChoice = "paper";
  playerChoiceImage.src = `./images/${playerChoice}.png`;
  setComputerChoice();
  setScore();
  checkWinner();
};

const setScissors = () => {
  playerChoice = "scissors";
  playerChoiceImage.src = `./images/${playerChoice}.png`;
  setComputerChoice();
  setScore();
  checkWinner();
};

const reloadGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreBox.innerHTML = playerScore;
  computerScoreBox.innerHTML = computerScore;
  playerChoiceImage.src = "./images/choices.png";
  computerChoiceImage.src = "./images/choices.png";
  winnerMessage.innerHTML = "";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
};

// form and input
let nameForm = document.querySelector(".introduction-form");
nameForm.addEventListener("submit", getPlayerName);

// start game button
let startGameButton = document.getElementById("start-game-button");
startGameButton.addEventListener("click", startGame);

// rock button
let rockButton = document.getElementById("rock-btn");
rockButton.addEventListener("click", setRock);

// paper button
let paperButton = document.getElementById("paper-btn");
paperButton.addEventListener("click", setPaper);

// scissors button
let scissorsButton = document.getElementById("scissors-btn");
scissorsButton.addEventListener("click", setScissors);

// reload button
let reloadButton = document.getElementById("reload-btn");
reloadButton.addEventListener("click", reloadGame);
// back button
let backButton = document.getElementById("back-btn");
backButton.addEventListener("click", backToHome);
