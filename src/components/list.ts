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
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemons = await this.repo.getAll();
    this.template = this.createTemplate();
    console.log(this.pokemons);
    this.render();
  }

  createTemplate() {
    const list = this.pokemons
      .map(
        (item: {
          name: string;
          sprites: { front_default: string };
          types: [{ type: { name: string } }];
        }) => `
          <li>
            <h3>${item.name.toUpperCase()}</h3>
            <img src="${item.sprites.front_default}" width="150" heigth="150">
            <h4>Type: ${item.types[0].type.name.toUpperCase()}</h4>
          </li>`
      )
      .join('');

    return `
    <ul>${list}</ul>`;
  }
}
