const myHandIcon = document.querySelector("#my-hand-icon > i");
const computerHandIcon = document.querySelector("#computer-hand-icon > i");

const myHandText = document.getElementById("my-hand-text");
const computerHandText = document.getElementById("computer-hand-text");

const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const reset = document.getElementById("reset-button");

const result = document.querySelector(".display-result");

const displayMyChoice = (e) => {
  const myChoice = [e.currentTarget.id, e.target.className];
  myHandText.innerText = e.currentTarget.id;
  myHandIcon.className = e.target.className;

  startGame(myChoice);
};

const getComputerChoice = () => {
  const computerChoice = {
    0: ["rock", "fa-regular fa-hand-back-fist"],
    1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"],
  };

  const randomIndex = Math.floor(Math.random() * 3);
  return computerChoice[randomIndex];
};

const displayComputerChoice = (computerChoice) => {
  computerHandText.innerText = computerChoice[0];
  computerHandIcon.className = computerChoice[1];
};

const startGame = (myChoice) => {
  clearInterval(intervalID);
  const computerChoice = getComputerChoice();
  displayComputerChoice(computerChoice);
  const resultAlpha = myChoice[0][0] + computerChoice[0][0];
  switch (resultAlpha) {
    case "rs":
    case "sp":
    case "pr":
      result.innerText = "win";
      break;
    case "sr":
    case "ps":
    case "rp":
      result.innerText = "lose";

      break;
    case "rr":
    case "ss":
    case "pp":
      result.innerText = "draw";
      break;
  }
};

const getInterval = () => {
  return setInterval(() => displayComputerChoice(getComputerChoice()), 300);
};

const intervalID = getInterval();

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
