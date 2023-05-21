export type PokemonStructure = {
  name: string;
  sprites: { front_default: string };
  types: [{ type: { name: string } }];
};
