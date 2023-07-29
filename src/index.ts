import parsePokemonData from "./parsePokemonData.js";

const pagePokemonsCall = parsePokemonData();

pagePokemonsCall
  .then((newPokemon) => {
    console.log(newPokemon);
  })
  .catch((error) => {
    console.log(error);
  });
