import Car from "./DOM/Car.js";
import CarList from "./DOM/CarList.js";

const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNameForm = document.getElementById("car-names-form");
const inputCountForm = document.getElementById("racing-count-form");

const carList = new CarList();

const handleInputForm = (e) => {
  e.preventDefault();
  try {
    if (!inputName.value) throw "inputNameError";
    if (!inputCount.value) throw "inputCountError";

    const gameCount = inputCount.value;
    if (inputName.value.includes(",")) {
      const cars = inputName.value.split(",");
      cars.forEach((carName) => {
        if (carName.length > 5) throw "inputNameLengthError";
        carList.addCar(new Car(carName));
      });
      carList.showCarList(gameCount);
    } else {
      if (inputName.value.length > 5) throw "inputNameLengthError";
      carList.addCar(new Car(inputName.value));
      carList.showCarList(gameCount);
    }

    carList.showWinner();
  } catch (error) {
    if (error === "inputNameError") {
      alert("자동차 이름을 입력해주세요");
    } else if (error === "inputCountError") {
      alert("횟수를 입력해주세요");
    } else if (error === "inputNameLengthError") {
      alert("자동차의 이름을 5자 이내로 입력해주세요");
    }
  } finally {
    inputName.value = "";
    inputCount.value = "";
  }
};

carNameForm.addEventListener("submit", handleInputForm);
inputCountForm.addEventListener("submit", handleInputForm);
