import urlPokeApi from "../../globals.js";
import {
  type Pokemon,
  type PokemonDataResponse,
  type PokemonListResponse,
} from "../../types.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import PokemonPage from "../PokemonPage/PokemonPage.js";
class AppComponent extends Component {
  private pokemonPage: PokemonPage;
  private nextPage: URL;
  private previousPage: URL;

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      await this.initializePokedexList(this.nextPage ?? urlPokeApi);
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <header class="main-header">
        <img alt="Pokedex logo" src="img/pokedex.png"/>
      </header>
      <footer>
        <nav class="page-change">
        </nav>
      </footer>`;

    const changePages = this.element.querySelector(".page-change")!;

    const backPageButtonComponent = new ButtonComponent(
      changePages,
      "<",
      async () => {
        this.pokemonPage.remove();
        await this.initializePokedexList(this.previousPage);
      }
    );

    const forwardButtonComponent = new ButtonComponent(
      changePages,
      ">",
      async () => {
        this.pokemonPage.remove();
        await this.initializePokedexList(this.nextPage);
      }
    );

    backPageButtonComponent.render();
    forwardButtonComponent.render();
  }

  private async getPokemonData(url: URL): Promise<PokemonListResponse> {
    const pokemonListData = await fetch(url);
    const pokemonData = (await pokemonListData.json()) as PokemonListResponse;
    return pokemonData;
  }

  private async getIndividualPokemonData(
    listResponse: PokemonListResponse
  ): Promise<Pokemon[]> {
    const pokemons = listResponse.results;
    const pagePokemons: Pokemon[] = [];

    for await (const pokemon of pokemons) {
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

  private async initializePokedexList(url: URL) {
    const pokeApiResponse = await this.getPokemonData(url);
    const pokemons: Pokemon[] = await this.getIndividualPokemonData(
      pokeApiResponse
    );

    this.nextPage = pokeApiResponse.next;
    this.previousPage = pokeApiResponse.previous;
    const mainHeader = this.element.querySelector(".main-header")!;
    const pokemonPage = new PokemonPage(mainHeader, pokemons);
    this.pokemonPage = pokemonPage;
    pokemonPage.render();
  }
}

export default AppComponent;
