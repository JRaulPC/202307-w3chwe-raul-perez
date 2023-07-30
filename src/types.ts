export interface PokemonListResponse {
  count: number;
  next: URL;
  previous: URL;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: URL;
}

export interface PokemonDataResponse {
  name: string;
  sprites: { other: { home: { front_default: string } } };
  id: number;
}

export interface Pokemon {
  id: number;
  name: string;
  pictureUrl: string;
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}

export interface ButtonsFunctions {
  next: string;
  previous: string;
}
