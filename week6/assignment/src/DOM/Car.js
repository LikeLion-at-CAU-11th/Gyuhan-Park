import Div from "./Div.js";

const gameResult = document.getElementById("result");
class Car {
  constructor(car) {
    this.car = new Div(car).node;
    gameResult.appendChild(this.car);
  }
}

export default Car;
