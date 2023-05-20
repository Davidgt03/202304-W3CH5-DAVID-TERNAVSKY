/* eslint-disable no-unused-vars */
import { Component } from './component';
import './header.css';
export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render('afterbegin');
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header class="main-header">
      <h1 class="main-title"><img src="src/img/pokemon-logo.svg" alt=""></h1>
    </header>
    `;
  }
}
