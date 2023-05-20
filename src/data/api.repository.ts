export class ApiRepository {
  url: string;
  urlType: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    this.urlType = 'https://pokeapi.co/api/v2/type/';
  }

  async getAll() {
    const response = await fetch(this.url);

    const pokemonList = await response.json();
    return pokemonList.results;
  }

  async getAllTypes() {
    const responseType = await fetch(this.urlType);

    const pokemonType = await responseType.json();
    return pokemonType.results;
  }
}
