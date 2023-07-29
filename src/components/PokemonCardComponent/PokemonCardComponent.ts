import { type Pokemon } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  constructor(parentElement: Element, private readonly pokemon: Pokemon) {
    super(parentElement, "article");
  }

  render() {
    super.render();

    this.element.innerHTML = `
        <h2>${this.pokemon.name}</h2>
          <img src="${this.pokemon.pictureUrl}" alt="">
        <span>${this.pokemon.id}</span>
    `;
  }
}

export default PokemonCardComponent;
