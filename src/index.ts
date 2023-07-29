import AppComponent from "./components/AppComponent/AppComponent.js";
import parsePokemonData from "./parsePokemonData.js";

const pagePokemonsCall = parsePokemonData();

pagePokemonsCall
  .then((newPokemon) => {
    console.log(newPokemon);
  })
  .catch((error) => {
    console.log(error);
  });

const appContainer = document.querySelector(".app-container")!;

const appComponent = new AppComponent(appContainer);

appComponent.render();
