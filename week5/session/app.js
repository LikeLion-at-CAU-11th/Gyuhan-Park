const headerTitle = document.querySelector(".header-title");

const myHandIcon = document.querySelector("#my-hand-icon > i");
const computerHandIcon = document.querySelector("#computer-hand-icon > i");

const myHandText = document.getElementById("my-hand-text");
const computerHandText = document.getElementById("computer-hand-text");

const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const resetBtn = document.getElementById("reset-button");

const result = document.querySelector(".display-result");

const allButtons = document.querySelectorAll("button");

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

const changeScore = () => {
  if (result.innerText == "win") {
    myScore.innerText = parseInt(myScore.innerText) + 1;
  } else if (result.innerText == "lose") {
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
  changeScore();
  disableBtn();
  setTimeout(() => {
    intervalId = setInterval(() => getRandomComputerChoiceBeforeStart(), 300);
    result.innerText = "vs";
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

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);

const audioContainer = document.querySelector("#audioContainer");
const playBtn = document.querySelector(".js-playBtn");
const playAudio = () => {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();
}
const loadAudio = () => {
  const source = document.querySelector("#audioSource");
  source.src = `bgm.mp3`;
  audioContainer.load();
  playAudio();
}

playBtn.addEventListener("click", loadAudio);
