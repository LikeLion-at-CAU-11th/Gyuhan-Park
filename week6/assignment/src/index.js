import Car from "./DOM/Car.js";
import CarList from "./DOM/CarList.js";
import Div from "./DOM/Div.js";

const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNameForm = document.getElementById("car-names-form");
const inputCountForm = document.getElementById("racing-count-form");

const gameResult = document.getElementById("result");

const carList = new CarList();

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
      carName && carList.addCar(new Car(carName));
    });

    carList.showCarList(gameCount);
  } else {
    carList.addCar(new Car(inputName.value));
    carList.showCarList(gameCount);
  }
  inputName.value = "";
  inputCount.value = "";
};

carNameForm.addEventListener("submit", handleInputForm);
inputCountForm.addEventListener("submit", handleInputForm);
