import Car from "./DOM/Car.js";
import CarList from "./DOM/CarList.js";

const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNameForm = document.getElementById("car-names-form");
const inputCountForm = document.getElementById("racing-count-form");

const carList = new CarList();

let errorFlag = 0;

const handleInputForm = (e) => {
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

  const gameCount = inputCount.value;
  if (inputName.value.includes(",")) {
    const cars = inputName.value.split(",");
    cars.forEach((carName) => {
      if (carName.length > 5) errorFlag = 1;
      !errorFlag && carList.addCar(new Car(carName));
    });
    !errorFlag && carList.showCarList(gameCount);
  } else {
    if (inputName.value.length > 5) errorFlag = 1;

    !errorFlag && carList.addCar(new Car(inputName.value));
    !errorFlag && carList.showCarList(gameCount);
  }

  if (errorFlag) {
    alert("자동차 이름을 5자 이내로 입력해주세요");
    inputName.value = "";
    inputCount.value = "";
  }
  carList.showWinner();
  inputName.value = "";
  inputCount.value = "";
};

carNameForm.addEventListener("submit", handleInputForm);
inputCountForm.addEventListener("submit", handleInputForm);
