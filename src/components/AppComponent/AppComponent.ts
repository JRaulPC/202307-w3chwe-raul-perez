import urlPokeApi from "../../globals.js";
import {
  type ButtonsFunctions,
  type Pokemon,
  type PokemonDataResponse,
  type PokemonListResponse,
} from "../../types.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import PokemonPage from "../PokemonPage/PokemonPage.js";
class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemons: Pokemon[] = await this.parsePokemonData();
      const mainHeader = this.element.querySelector(".main-header")!;

      const pokemonPage = new PokemonPage(mainHeader, pokemons);
      pokemonPage.render();
      await this.goToNextPage();
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
      </main>
      <footer>
        <nav class="page-change">
        </nav>
      </footer>`;

    const changePages = this.element.querySelector(".page-change")!;

    const backPageButtonComponent = new ButtonComponent(
      changePages,
      "<",
      () => {}
    );
    const forwardButtonComponent = new ButtonComponent(
      changePages,
      ">",
      async () => {
        await this.goToNextPage();
      }
    );
    backPageButtonComponent.render();
    forwardButtonComponent.render();
  }

  private async parsePokemonData() {
    const pokemonListData = await fetch(urlPokeApi);

    const { results: receivedListOfPokemons } =
      (await pokemonListData.json()) as {
        results: PokemonListResponse[];
      };

    console.log(receivedListOfPokemons);

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

  private async goToNextPage() {
    const getPageUrls = await fetch(urlPokeApi);

    const { next: nextPageUrl } = (await getPageUrls.json()) as {
      next: ButtonsFunctions;
    };
    console.log(nextPageUrl);
  }
}

export default AppComponent;
