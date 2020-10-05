/* eslint-disable no-console */
import { LitElement, html } from 'lit-element';
import { commonStyles } from '../../utils/custom-styles';
import '../../components/common-header';
import '../../components/work-header';
import './components/vacation-form/components/vacation-form';

class AntoniomaracilPage extends LitElement {
  static get styles() {
    return [
      commonStyles
    ];
  }

  static get properties() {
    return {
      arrVacation: { type: Array }
    };
  }

  constructor() {
    super();
    this.arrVacation = [];
  }

  addVacation(e) {
    this.arrVacation = [...[e.detail.apply], ...this.arrVacation];
  }

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <work-header>antoniomaracil</work-header>
        <h2 style="text-align:center;">Vacation Form</h2>
        <hr>
        <vacation-form></vacation-form>
      </section>
    `;
  }
}

window.customElements.define('antoniomaracil-page', AntoniomaracilPage);
