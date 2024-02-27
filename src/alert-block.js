import { LitElement, html, css } from 'lit';

export class AlertBlock extends LitElement {
  static get tag() {
    return 'alert-block';
  }

  constructor() {
    super();
    this.opened = true;
    this.status = 'notice';
    this.date = '';
    this.sticky = false;
    this.closedHeight = '54px';
    this.openHeight = '185px';

    const storedStatus = localStorage.getItem('alertStatus');
    if (storedStatus === 'closed') {
      this.opened = false;
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }

      .alert {
        padding: 16px;
        background-color: var(--alert-bg, #ededed);
        color: var(--alert-text-color, #000);
        transition: max-height 0.3s ease;
        overflow: hidden;
        max-height: var(--alert-height, 185px);
      }

      .closed .alert {
        max-height: var(--closed-height, 54px);
      }

      .toggle-button {
        cursor: pointer;
        border: none;
        background: none;
        color: var(--button-color, #000);
        font-size: 14px;
      }
    `;
  }

  toggleAlert() {
    if (this.sticky && !this.opened) {
      this.opened = true;
      localStorage.removeItem('alertStatus');
    } else {
      this.opened = !this.opened;
      if (!this.opened) {
        localStorage.setItem('alertStatus', 'closed');
      }
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="alert ${this.opened ? '' : 'closed'}">
        <div class="toggle-button" @click="${this.toggleAlert}">
          ${this.opened ? 'Close' : 'Open'} Alert
        </div>
        <slot></slot>
        <div class="date">${this.date}</div>
      </div>
    `;
  }

  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
      status: { type: String },
      date: { type: String },
      sticky: { type: Boolean, reflect: true },
      closedHeight: { type: String },
      openHeight: { type: String },
    };
  }
}

customElements.define(AlertBlock.tag, AlertBlock);
