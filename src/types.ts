export interface PokemonListResponse {
  name: string;
  url: string;
}

export interface PokemonDataResponse {
  name: string;
  sprites: Record<string, string>;
  id: number;
}

export interface Pokemon {
  name: string;
  pictureUrl: string;
  id: number;
}
