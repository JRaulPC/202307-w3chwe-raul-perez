import urlPokeApi from "../../globals.js";
import {
  type Pokemon,
  type PokemonDataResponse,
  type PokemonListResponse,
} from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private pagePokemonsCall: Pokemon[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemons: Pokemon[] = await this.parsePokemonData();

      this.pagePokemonsCall = pokemons;
      this.renderPokemonCards();
    })();
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
  }

  private renderPokemonCards() {
    const pokemonList = this.element.querySelector(".pokemons-list")!;
    this.pagePokemonsCall.forEach((pokemonCard) => {
      const pokemonCardListElement = document.createElement("li");
      new PokemonCardComponent(pokemonCardListElement, pokemonCard).render();
      pokemonList.append(pokemonCardListElement);
    });
  }

  private async parsePokemonData() {
    const pokemonListData = await fetch(urlPokeApi);

    const { results: receivedListOfPokemons } =
      (await pokemonListData.json()) as {
        results: PokemonListResponse[];
      };

    const pagePokemons: Pokemon[] = [];

    for await (const pokemon of receivedListOfPokemons) {
      const individualPokemonResponse = await fetch(pokemon.url);
      const pokemonData =
        (await individualPokemonResponse.json()) as PokemonDataResponse;

      pagePokemons.push({
        id: pokemonData.id,
        name: pokemonData.name,
        pictureUrl: pokemonData.sprites.other.home.front_default,
      });
    }

    return pagePokemons;
  }
}

export default AppComponent;
