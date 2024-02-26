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
        transition: 200ms 250ms all ease-in-out;
      }

     