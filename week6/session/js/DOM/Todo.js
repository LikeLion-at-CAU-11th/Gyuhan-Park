import Button from "./Button.js";
import Div from "./Div.js";
import Input from "./Input.js";

class Todo {
  constructor(todo) {
    this.line = new Div("", "flex").node;
    const input = new Input("");
    const innerText = new Div(todo, "inner");
    const button = new Button("X");
    button.node.addEventListener("click", () => {
      document.body.removeChild(this.line);
    });

    input.node.addEventListener("click", () => {
      innerText.node.classList.toggle("complete");
    });

    [input, innerText, button].forEach((dom) => {
      this.line.appendChild(dom.node);
    });

    document.body.appendChild(this.line);
  }
}

export default Todo;
