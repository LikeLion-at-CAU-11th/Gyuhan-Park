const body = document.querySelector("body");

const headerTitle = document.querySelector(".header-title");

const myHandIcon = document.querySelector("#my-hand-icon > i");
const computerHandIcon = document.querySelector("#computer-hand-icon > i");

const myHandText = document.getElementById("my-hand-text");
const computerHandText = document.getElementById("computer-hand-text");

const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");

const resetBtn = document.getElementById("reset-button");

const result = document.querySelector(".display-result");

const allButtons = document.querySelectorAll("button");

const audioContainer = document.querySelector("#audioContainer");
const startBtn = document.getElementById("start-display");

const modeChangeBtn = document.getElementById("dark-mode-btn");
const contentBox = document.querySelector(".contents-wrapper");
const gameBtn = document.querySelectorAll(".button-section > button");

const displayMyChoice = (e) => {
  const myChoiceText = e.currentTarget.className.split(" ")[0];
  const myChoiceIcon = e.target.className;
  myHandText.innerText = myChoiceText;
  myHandIcon.className = myChoiceIcon;

  const myChoice = [myChoiceText, myChoiceIcon];
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

const changeScore = () => {
  if (result.innerText == "win !") {
    myScore.innerText = parseInt(myScore.innerText) + 1;
  } else if (result.innerText == "lose !") {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
};

const startGame = (myChoice) => {
  clearInterval(intervalId);
  const computerChoice = getComputerChoice();
  displayComputerChoice(computerChoice);
  const resultAlpha = myChoice[0][0] + computerChoice[0][0];
  switch (resultAlpha) {
    case "rs":
    case "sp":
    case "pr":
      result.innerText = "win !";
      result.style.color = "blue";
      break;
    case "sr":
    case "ps":
    case "rp":
      result.innerText = "lose !";
      result.style.color = "red";
      break;
    case "rr":
    case "ss":
    case "pp":
      result.innerText = "draw !";
      result.style.color = "green";
      break;
  }
  changeScore();
  disableBtn();
  setTimeout(() => {
    intervalId = setInterval(() => getRandomComputerChoiceBeforeStart(), 300);
    result.innerText = "vs";
    result.style.color = "";
    activeBtn();
  }, 2000);
};

const disableBtn = () => {
  for (let i = 0; i < 4; i++) {
    allButtons[i].disabled = true;
  }
};

const activeBtn = () => {
  for (let i = 0; i < 4; i++) {
    allButtons[i].disabled = false;
  }
};

const getRandomComputerChoiceBeforeStart = () => {
  displayComputerChoice(getComputerChoice());
};
let intervalId = setInterval(() => getRandomComputerChoiceBeforeStart(), 300);

const resetScore = () => {
  myScore.innerText = 0;
  computerScore.innerText = 0;
  headerTitle.innerText = "@@@  Reset  @@@";
  setTimeout(() => (headerTitle.innerText = "Rock Scissor Paper !"), 500);
};

const playAudio = () => {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();
};
const loadAudio = () => {
  const source = document.querySelector("#audioSource");
  source.src = `bgm.mp3`;
  audioContainer.load();
  playAudio();
};

const getGameDisplay = () => {
  startBtn.style.display = "none";
  loadAudio();
};

const changeMode = () => {
  const INNER_TEXT = modeChangeBtn.innerText;
  body.classList.toggle("dark-mode");
  modeChangeBtn.classList.toggle("dark-mode");
  contentBox.classList.toggle("dark-mode-border");
  for (let i = 0; i < gameBtn.length; i++) {
    gameBtn[i].classList.toggle("dark-mode-border");
  }
  if (INNER_TEXT === "dark mode") {
    modeChangeBtn.innerText = "light mode";
    resetBtn.style.borderColor = "white";
    result.style.color = "white";
    gameBtn;
  } else if (INNER_TEXT === "light mode") {
    modeChangeBtn.innerText = "dark mode";
    result.style.color = "black";
  }
};

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);
startBtn.addEventListener("click", getGameDisplay);
modeChangeBtn.addEventListener("click", changeMode);
