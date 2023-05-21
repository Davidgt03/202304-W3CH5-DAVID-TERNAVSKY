export class ApiRepository {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAll() {
    const response = await fetch(this.url);
    const pokemonList = await response.json();
    const pokemonInfo = await Promise.all(
      pokemonList.results.map(async (pokemon: { url: string }) => {
        const singlePokemonUrl = pokemon.url;
        const response = await fetch(singlePokemonUrl);
        const pokemonData = await response.json();
        return pokemonData;
      })
    );
    return pokemonInfo;
  }
}
