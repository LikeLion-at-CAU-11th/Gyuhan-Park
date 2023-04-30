const gameResult = document.getElementById("result");

class CarList {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  clearCar() {
    this.cars.splice(0);
  }

  showCarList(gameCount) {
    for (let i = 0; i < gameCount; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        this.cars[j].setScore();
      }
      gameResult.appendChild(document.createElement("br"));
    }
  }

  showWinner() {
    const numbers = {};
    for (let i = 0; i < this.cars.length; i++) {
      numbers[this.cars[i].name] = this.cars[i].num;
    }
    const maxNumber = Math.max(...Object.values(numbers));
    const winners = Object.keys(numbers).filter(
      (key) => numbers[key] === maxNumber
    );
    const finalWinner = document.getElementById("racing-winners");
    finalWinner.innerText = winners.join(", ");
  }
}

export default CarList;
