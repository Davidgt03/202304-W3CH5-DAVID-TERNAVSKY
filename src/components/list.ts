import { Component } from './component';
import './list.css';
import { ApiRepository } from '../data/api.repository';
import { PokemonStructure } from '../model/pokemon';
export class List extends Component {
  // eslint-disable-next-line no-unused-vars
  pokemons: PokemonStructure[];
  repo: ApiRepository;
  type: any;
  constructor(selector: string) {
    super(selector);
    this.pokemons = [];
    this.repo = new ApiRepository();
    this.type = 'hola';
    this.handleLoad();
    this.handleLoadType();
  }

  async handleLoad() {
    this.pokemons = await this.repo.getAll();
    this.template = this.createTemplate();
    console.log(this.pokemons);
    this.render();
  }

  async handleLoadType() {
    this.pokemons = await this.type.getAll();
    this.template = this.createTemplate();
    console.log(this.type);
    this.render();
  }

  createTemplate() {
    const list = this.pokemons
      .map(
        (item: { name: string; url: string }) => `
          <li>
            <h3>${item.name.toUpperCase()}</h3>
            <img width="100" heigth="100" class= "poke-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              item.url.split('/')[6]
            }.gif" >
          </li>`
      )
      .join('');

    return `
    <section class="tasks"></section><ul>${list}</ul>`;
  }
}
