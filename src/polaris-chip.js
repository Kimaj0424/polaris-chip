// Import LitElement and necessary functions from lit library
import { LitElement, html, css } from 'lit';
// Import the MyCard class from the my-card.js file
import { MyCard } from './my-card.js';

// Define the PolarisChip class that extends LitElement
export class PolarisChip extends LitElement {
  // Static method to get the tag name for this custom element
  static get tag() {
    return 'polaris-chip';
  }

  // Constructor to set default values for properties
  constructor() {
    super();
    // a variable on this object called title
    this.title = 'Chip Default';
    this.link = "#";
  }

  // Static method to define scoped styles for the custom element
  static get styles() {
    // "css" called here is actually a function exported from Lit at the top
    // so that it scopes the CSS nicely and also applies sanitization
    return css`
    /*
      :host is a special selector meaning "the tag itself"
      Think of if we were looking at how a <strong> tag is made. It would have
      :host { font-weight: bold; display: inline; }
    */
      :host {
        /* Always make sure that your element has a default way of being displayed */
        display: inline-flex;
      }

      span {
        background-color: orange;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
      }

      span:hover {
        background-color: grey;
        border: 1px solid black;
      }
    `;
  }

  /**
   * render method is specific to LitElement based code. Anything you write here
   * you can think of as what gets printed to the screen when the tag is used.
   * In this example, <polaris-chip></polaris-chip> will actually display what you
   * see below in the render method.
   * @returns an HTML template which gets sanitized and rendered
   */
  render() {
    // html much like css above applies sanitization / security and ensures
    // there is a valid HTML template that is displayed on screen. It's important
    // to keep in mind that any broken HTML tags or JS variables here can cause
    // your element to not render so color coding and syntax checking with console
    // open in your browser is critical!

    // ` is a special character that allows JS to print variables in it using
    // the ${} syntax, any variable can happen between those tags. Shown below
    // it is going to print the title of the element. The magic of Lit is that
    // when title is changed (even by inspecting the document and hacking the value)
    // it will automatically update what is displayed and do so incredibly quickly
    return html`<a href="${this.link}"><span>${this.title}</span></a>`;
  }

  // LitElement uses the properties call to do the following:
  // - When a value changes it reacts to the change
  // - When it reacts to the change and it's listed in the render() method, it rerenders
  // - this is what users would expect, but is not the way the web usually works
  // - Lit + Web component spec + properties == HTML with data variables
  static get properties() {
    return {
      // this is a String. Array, Object, Number, Boolean are other valid values here
      title: { type: String },
      link: { type: String },
    };
  }
}

// All web components have a call to customElements.define(tag-name, className);
// this code tells the browser that when you see this new HTML tag name
// that you should run this class definition. This is the magic of standards
// because this code runs at the browser layer it means that Safari/Firefox/Chrome/Edge
// authors have all agreed on how this should work and as a result it is extremely fast
// Lit operates juuuust above the standards layer and leverages other standards
// in order to deliver optimal performance with minimal "syntactical sugar"
// aka things specific to Lit itself
globalThis.customElements.define(PolarisChip.tag, PolarisChip);
globalThis.customElements.define(MyCard.tag, MyCard);
