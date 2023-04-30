const gameResult = document.getElementById("result");

class CarList {
  constructor() {
    this.cars = [];
  }
  addCar(car) {
    this.cars.push(car);
  }

  showCarList(gameCount) {
    for (let i = 0; i < gameCount; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        this.cars[j].setScore();
      }
      gameResult.appendChild(document.createElement("br"));
    }
  }
}

export default CarList;
