import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly direction: string,
    private readonly actionOnClick: () => void,
    className = ""
  ) {
    super(parentElement, "button", `button ${className}`);
  }

  public render(): void {
    super.render();

    this.element.textContent = this.direction;

    this.addListeners();
  }

  addListeners(): void {
    this.element.addEventListener("click", () => {
      this.actionOnClick();
    });
  }
}

export default ButtonComponent;
