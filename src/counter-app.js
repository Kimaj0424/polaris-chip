import { LitElement, html, css } from "lit";

export class CounterApp extends LitElement {
  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.counter = 16;
    this.max = 25;
    this.min = 10;
  }

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter === 21) {
        this.makeItRain();
      }
    }
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: sans-serif;
        text-align: center;
      }

      .counter {
        font-size: 48px;
        color: black;
        margin-bottom: 16px;
        transition: color 0.3s ease;
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
      }

      button {
        padding: 8px 16px;
        font-size: 18px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        transition: background-color 0.3s ease;
      }

      button:hover,
      button:focus {
        background-color: #0056b3;
      }

      button:disabled {
        background-color: #ced4da;
        cursor: not-allowed;
      }
    `;
  }

  render() {
    return html`
      <div class="counter" style=${this.counter >= 21 ? 'color: red;' : this.counter >= 18 ? 'color: orange;' : ''}>
        ${this.counter}
      </div>
      <div class="buttons">
        <button @click=${() => this.decrement()} ?disabled=${this.counter <= this.min}>-</button>
        <button @click=${() => this.increment()} ?disabled=${this.counter >= this.max}>+</button>
      </div>
    `;
  }

  increment() {
    if (this.counter < this.max) {
      this.counter++;
      this.requestUpdate();
    }
  }

  decrement() {
    if (this.counter > this.min) {
      this.counter--;
      this.requestUpdate();
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
}

customElements.define(CounterApp.tag, CounterApp);
