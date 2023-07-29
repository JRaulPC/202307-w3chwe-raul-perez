import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";
import pokemonCardsCallList from "../data/pokemons.js";
class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <header class="main-header">
        <img alt="Pokedex logo" src="img/pokedex.png"/>
      </header>
      <main class="main-page">
        <ul class="pokemons-list"></ul>
      </main>`;

    const pokemonList = this.element.querySelector(".pokemons-list")!;

    pokemonCardsCallList.forEach((pokemonCard) => {
      const pokemonCardListElement = document.createElement("li");
      new PokemonCardComponent(pokemonCardListElement, pokemonCard).render();
      pokemonList.append(pokemonCardListElement);
    });
  }
}

export default AppComponent;
