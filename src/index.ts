import pokemonData from "./globals.js";
import { type PokemonData } from "./types.js";

const pokemonDataResponse = await fetch(pokemonData);

const { results: pokemons } = (await pokemonDataResponse.json()) as {
  results: PokemonData[];
};
