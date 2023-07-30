import { type Pokemon } from "../../types";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class PokemonPage extends Component {
  constructor(
    parentElement: Element,
    private readonly pagePokemons: Pokemon[]
  ) {
    super(parentElement, "main", "main-content");
  }

  render() {
    super.render();

    this.element.innerHTML = `
      <ul class="pokemons-list"></ul>
     
    `;
    this.renderPokemonCards();
  }

  private renderPokemonCards() {
    const pokemonList = this.element.querySelector(".pokemons-list")!;
    this.pagePokemons.forEach((pokemonCard) => {
      const pokemonCardListElement = document.createElement("li");
      new PokemonCardComponent(pokemonCardListElement, pokemonCard).render();
      pokemonList.append(pokemonCardListElement);
    });
  }
}

export default PokemonPage;
