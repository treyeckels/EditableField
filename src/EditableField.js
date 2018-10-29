class EditableField {
  constructor() {
    this.dom = document.createElement("div");
    this.dom.className = "editable-field";
    this.state = {
      input: "Insert Text Here",
      default: "Insert Text Here",
      isEditing: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.addEvents();
  }

  handleClick(evt) {
    if (this.state.isEditing) {
      return;
    }
    this.state.isEditing = true;
    this.render();
  }

  addEvents() {
    this.dom.addEventListener("click", this.handleClick);
  }

  render() {
    if (this.state.isEditing) {
      const input = document.createElement("input");
      input.type = "text";
      this.dom.innerHTML = "";
      if (this.state.input !== this.state.default) {
        input.value = this.state.input;
      }
      this.dom.appendChild(input);
      input.focus();
      input.addEventListener("keyup", evt => {
        this.state.input = evt.target.value;
      });

      input.addEventListener("blur", () => {
        this.state.isEditing = false;
        this.render();
      });
    } else {
      this.dom.innerHTML = this.state.input;
    }

    return this.dom;
  }
}

export { EditableField };
