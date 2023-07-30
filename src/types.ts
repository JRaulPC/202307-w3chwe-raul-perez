export interface PokemonListResponse {
  next: string;
  previous: string | undefined;
  name: string;
  url: string;
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
