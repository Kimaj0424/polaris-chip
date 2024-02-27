import { LitElement, html, css } from "lit";

export class AlertBlock extends LitElement {
  static get tag() {
    return "alert-block";
  }
  constructor() {
    super();
    this.close = false;
    this.sticky = true;
    this.date = "NOVEMBER 17, 2023 12:00 AM";
    this.status = "notice";
    this.link = "https://www.psu.edu/news";
    this.message="Occaecat laboris incididunt ea labore quis in qui commodo velit cillum et commodo. Dolore consectetur eu eu reprehenderit anim fugiat in nostrud anim magna enim nisi. Mollit est incididunt sin aliqua duis. Deserunt ut velit deserunt fugiat eiusmod. Doincididunt laborum aliqua cupidatat adipisicing fugiat reprehenderit cillum id. Minim minim elit occaecat id velit fugiat ea. Aliqua excepteur ea excepteur cillum esse voluptate non elit laboris laboris esse est sunt incididunt ullamco.";
  }

  static get styles() {
    return css`
      :host {
        color: #ffffff;
        width: 100%;
        min-height: 185px;
        display: inline-flex;
        font-family: "Arial", sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: var(--${this.status}-color);
        transition: all 0.5s;
        padding: 20px;
      }

      .message {
        margin-top: 20px;
        line-height: 1.5;
      }

      .date {
        font-size: 14px;
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h3>ALERT!</h3>
        <p class="message">${this.message}</p>
        <div class="date">${this.date}</div>
      </div>
    `;
  }

  static get properties() {
    return {
      close: { type: Boolean },
      sticky: { type: Boolean },
      date: { type: String },
      status: { type: String },
      link: { type: String },
      message: { type: String }
    };
  }
}

customElements.define(AlertBlock.tag, AlertBlock);
