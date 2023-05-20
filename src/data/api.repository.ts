export class ApiRepository {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAll() {
    const response = await fetch(this.url);
    const pokemonList = await response.json();
    return pokemonList.results;
  }
}
