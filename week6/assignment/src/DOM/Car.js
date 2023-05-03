import Div from "./Div.js";

const gameResult = document.getElementById("result");
class Car {
  constructor(name) {
    this.name = name;
    this.num = 0;
    this.score = "";
    this.line = new Div(`${this.name}: ${this.score}`).node;
  }

  setScore() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 4) {
      this.num += 1;
      this.score = "-".repeat(this.num);
    }
    const innerText = new Div(`${this.name}: ${this.score}`);
    [innerText].forEach((dom) => gameResult.appendChild(dom.node));
  }
}

export default Car;
