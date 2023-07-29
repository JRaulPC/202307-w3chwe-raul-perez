import pokemonListResponse from "./globals.js";
import {
  type Pokemon,
  type PokemonDataResponse,
  type PokemonListResponse,
} from "./types.js";

const parsePokemonData = async () => {
  const pokemonListData = await fetch(pokemonListResponse);

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
      pictureUrl: pokemonData.sprites.front_default,
    });
  }

  return pagePokemons;
};

export default parsePokemonData;
