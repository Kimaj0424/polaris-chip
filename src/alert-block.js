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
    this.message = "Occaecat laboris incididunt ea labore quis in qui commodo velit cillum et commodo. Dolore consectetur eu eu reprehenderit anim fugiat in nostrud anim magna enim nisi. Mollit est incididunt sin aliqua duis. Deserunt ut velit deserunt fugiat eiusmod. Doincididunt laborum aliqua cupidatat adipisicing fugiat reprehenderit cillum id. Minim minim elit occaecat id velit fugiat ea. Aliqua excepteur ea excepteur cillum esse voluptate non elit laboris laboris esse est sunt incididunt ullamco.";
  }

  static get styles() {
    return css`
      :host {
        --background-color: #bf8226;
        --foreground-color: #ffd100;
        --dark-text-color: #000321;
        color: #ffffff;
        background-color: var(--background-color);
        width: 100%;
        min-height: 185px;
        display: inline-flex;
        font-family: "Arial", sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 20px;
        transition: all 200ms ease-in-out;
      }

      :host([open]) {
        --foreground-color: #ffd100;
        background-color: var(--foreground-color);
        min-height: 54px;
      }

      .alert {
        display: flex;
        justify-content: space-between;
        padding: 0px 62px;
        position: relative;
        max-height: 258px;
      }

      .alert-content {
        position: relative;
      }

      .alert-content::before {
        content: " ";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 2rem;
        left: -0.8rem;
        border-left: 35px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 30px solid var(--foreground-color);
      }

      .alert-icon {
        padding: 20px 38px 20px 12px;
        max-width: 46px;
        max-height: 46px;
        flex-grow: 0;
        flex-shrink: 0;
        stroke: var(--dark-text-color);
        z-index: 1;
      }

      .alert-message {
        margin: auto;
        max-width: 930px;
        min-width: 153px;
        max-height: 258px;
        font-family: "Roboto-Bold", sans-serif;
        font-style: italic;
        font-size: 18px;
        letter-spacing: 0.5px;
        line-height: 20px;
        color: var(--dark-text-color);
        z-index: 1;
      }

      .alert-date {
        padding: 16px 4px;
        margin: auto;
        max-width: 150px;
      }

      .paralellogram::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 1023px;
        height: 100%;
        max-height: 258px;
        transform: skew(20deg);
        background-color: var(--foreground-color);
        z-index: 0;
      }

      .alert-info {
        position: relative;
        z-index: 1;
        color: var(--dark-text-color);
      }

      .alert-button {
        padding: 36px 0px 0px 48px;
      }

      .btn {
        border: none;
        background-color: transparent;
        display: inline-flex;
        position: relative;
        font-weight: 700;
        letter-spacing: 0.03rem;
        font-size: 16px;
        color: #ffffff;
        z-index: 1;
      }

      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
    `;
  }
}

customElements.define(AlertBlock.tag, AlertBlock);
