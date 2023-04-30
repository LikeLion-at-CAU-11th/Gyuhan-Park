import Car from "./DOM/Car.js";

const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNameForm = document.getElementById("car-names-form");
const inputCountForm = document.getElementById("racing-count-form");

const gameResult = document.getElementById("result");


const handleCarNameForm = (e) => {
  e.preventDefault();
  if (!inputName.value) {
    alert("자동차 이름을 입력해주세요");
    inputName.value = "";
    return;
  }
  if (!inputCount.value) {
    alert("횟수를 입력해주세요");
    inputCount.value = "";
    return;
  }
  console.log(inputName.value);
  if (inputName.value.includes(",")) {
    const cars = inputName.value.split(",");
    const carList = [];

    cars.forEach((carName) => {
      carName && carList.push(new Car(carName));
    });
    console.log(carList);
    for (let i = 0; i < inputCount.value; i++) {
      carList.forEach((car) => {
        car.setScore();
        console.log("name, score: ", car.name, car.score);
        gameResult.appendChild(car.line);
      });
    }
  } else {
    new Car(inputName.value);
  }
  inputName.value = "";
};

carNameForm.addEventListener("submit", handleCarNameForm);
inputCountForm.addEventListener("submit", handleCarNameForm);
