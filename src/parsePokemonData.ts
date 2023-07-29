import pokemonData from "./globals.js";
import {
  type Pokemon,
  type PokemonDataResponse,
  type PokemonListResponse,
} from "./types.js";

const parsePokemonData = async () => {
  const pokemonListDataResponse = await fetch(pokemonData);

  const { results: pokemons } = (await pokemonListDataResponse.json()) as {
    results: PokemonListResponse[];
  };

  const pagePokemons: Pokemon[] = []; // Añadir stats

  for await (const pokemon of pokemons) {
    const individualPokemonResponse = await fetch(pokemon.url);
    const pokemonData =
      (await individualPokemonResponse.json()) as PokemonDataResponse;

    pagePokemons.push({
      id: pokemonData.id,
      name: pokemonData.name,
      pictureUrl: pokemonData.sprites.front_default,
    });
  }

  return pagePokemons;
};

export default parsePokemonData;
