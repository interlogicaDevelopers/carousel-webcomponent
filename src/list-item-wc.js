import { LitElement, html } from 'lit-element';

class ListItemWebComp extends LitElement {

  static get properties() {
    return {
      car: {
        type: Object
      }
    }
  }

  render() {
    const { car } = this;

    return html `
      <style>
        .card {
          font-size: 1.5em;
        }
        .card h4 {
          margin: 0;
        }
      </style>
      <div class="card">
        <h4>${car.manufacturer} ${car.model}</h4>
        <img loading="lazy" src="${car.img}" width="${car.size.width}" height="${car.size.height}" alt="${car.img}" />
      </div>
    `;
  }
}

customElements.define('list-item-wc', ListItemWebComp);