import { type Pokemon } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  constructor(parentElement: Element, private readonly pokemon: Pokemon) {
    super(parentElement, "article", "pokemon-card");
  }

  render() {
    super.render();

    this.element.innerHTML = `
        <h2 class="pokemon-card__name">${
          this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
        }</h2>
          <img src="${this.pokemon.pictureUrl}" alt= an image of the pokemon"${
      this.pokemon.name
    }">
        <span class="pokemon-card__id">${this.pokemon.id}</span>
    `;
  }
}

export default PokemonCardComponent;
