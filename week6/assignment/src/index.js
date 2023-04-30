import Car from "./DOM/Car.js";

const input = document.getElementById("car-names-input");
console.log("input: ", input);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value.includes(",")) {
      const cars = input.value.split(",");
      cars.forEach((car) => {
        car && new Car(car);
      });
    } else {
      new Car(input.value);
    }
    input.value = "";
  }
});

const carNameInputBtn = document.getElementById("car-names-submit");
const racingCountBtn = document.getElementById("racing-count-submit");
carNameInputBtn.addEventListener("click", (e) => e.preventDefault());
racingCountBtn.addEventListener("click", (e) => e.preventDefault());
