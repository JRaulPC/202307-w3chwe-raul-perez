export interface PokemonListResponse {
  name: string;
  url: string;
}

export interface PokemonDataResponse {
  name: string;
  sprites: { other: { home: { front_default: string } } };
  id: number;
}

export interface Pokemon {
  name: string;
  pictureUrl: string;
  id: number;
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
