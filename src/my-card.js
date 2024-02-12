import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = "Adam Kim's Card";
    this.imageSrc = "https://www.dhresource.com/webp/m/0x0/f2/albu/g20/M01/82/34/rBVaqGCbpbuAZ5VyAAC8IoN879A617.jpg";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
      }

      .card {
        max-width: 400px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
      }

      .card-content {
        padding: 20px;
      }

      img {
        width: 100%;
        height: auto;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-content">
          <h2>${this.title}</h2>
          <img src="${this.imageSrc}" alt="Card Image">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Details</summary>
            <div><slot></slot></div>
          </details>
        </div>
      </div>
    `;
  }

  openChanged(e) {
    this.fancy = e.target.open;
  }
}

customElements.define('my-card', MyCard);
