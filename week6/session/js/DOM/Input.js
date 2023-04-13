import DOM from "./DOM.js";

class Input extends DOM {
  constructor(innerText, className) {
    super("input", innerText, className);
    this.node.type = 'checkbox';
  }
}

export default Input;
