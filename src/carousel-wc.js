import { LitElement, html } from 'lit-element';
import './list-wc.js';

class CarouselWebComp extends LitElement {
  static get properties() {
    return {
      dataUrl: { type: String },
      title: { type: String },
      cars: {type: Array}
    };
  }

  constructor() {
    super();
    this.cars = [{manufacturer: 'Loading...', model: ''}];
  }

  firstUpdated() {
    this.getData();
  }

  getData() {
    fetch(this.dataUrl)
      .then(res => res.json())
      .then(data => this.cars = data.cars)
  }

  render() {
    return html`
      <style>
        .container {
          background-color:rgba(0, 0, 0, 0.5)
        }
      </style>
      <div class="container">
        <span>${this.title}</span>
        <list-wc .cars=${this.cars}></list-wc>
      <div>
    `;
  }
}

customElements.define('carousel-wc', CarouselWebComp);