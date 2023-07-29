import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <header class="main-header">
        <img alt="Pokedex logo" src="img/pokedex.png"/>
      </header>`;
  }
}

export default AppComponent;
