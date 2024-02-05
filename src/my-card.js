import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Adam Kim's Card";
    this.imageSrc = "https://www.dhresource.com/webp/m/0x0/f2/albu/g20/M01/82/34/rBVaqGCbpbuAZ5VyAAC8IoN879A617.jpg";
    this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis justo nec turpis gravida aliquam.";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        max-width: 400px;
        width: 100%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        padding: 16px;
        background-color: navy;
        transition: .6s all ease-in-out;
      }

      img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
      }

      button {
        background-color: green;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
      }

      @media screen and (max-width: 800px) and (min-width: 501px) {
        button {
          display: block;
        }
      }

      @media screen and (max-width: 500px) {
        .card {
          max-width: 300px;
        }

        img {
          max-height: 150px;
        }
      }

      .card.change-color {
        background-color: #FF9700;
      }

      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-content">
          <h2>${this.title}</h2>
          <img src="${this.imageSrc}" alt="Card Image">
          <p>${this.content}</p>
          <button class="duplicate">Clone Card</button>
          <button id="changetitle">Change Title</button>
          <button id="changeimage">Change Image</button>
          <button id="changebg">Change Background</button>
          <button id="delete">Delete Card</button>
        </div>
        <a href="https://hax.psu.edu" target="_blank"><button>Details</button></a>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      content: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
