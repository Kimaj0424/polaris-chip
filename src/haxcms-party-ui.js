import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return "haxcms-party-ui";
  }

  constructor() {
    super();
    /* idk how to get the user's handle so it's my username as a default for now */
    /* TODO: can i make the array size change based on how many users i have? would need to create a new list every time we add it then right?*/
    this.party = [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
        }
        .container {
          background-color: #f2f2f2;
          padding: 20px;
        }
        .button-panel {
          display: flex;
        }

        button {
          font-family: "Press Start 2P", system-ui;
          font-weight: 400;
          font-style: normal;
        }
      `,
    ];
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="container">
          <div class="button-panel">
            <input
              type="text"
              class="search-input"
              placeholder="Search party member"
              @input="${this.handleInput}"
            />
            <button class="add-button" @click="${this.addItem}">Add</button>
            <button class="remove-button">Remove</button>
          </div>

          <div>
            ${this.party.map(
              (member) =>
                html`<rpg-character walking seed=${member}></rpg-character>`
            )}
          </div>
          <button class="save-button" @click="${this.makeItRain}">
            Save Party Members
          </button>
        </div>
      </confetti-container>
    `;
  }

  handleInput(event) {
    const inputValue = event.target.value;
    // Remove any characters that are not lowercase letters or numbers (Adam's Notes)
    const sanitizedValue = inputValue.replace(/[^a-z0-9]/g, '');
    event.target.value = sanitizedValue.slice(0, 10); // Limit to 10 characters
  }

  addItem() {
    const input = document.querySelector(".search-input").value;
    // Validate if input is not empty
    if (input.trim() !== "") {
      // Add only if the party size is less than 5
      if (this.party.length < 5) {
        // Add to party if input matches criteria
        if (/^[a-z0-9]{1,10}$/.test(input)) {
          // Check if the user is already in the party
          if (!this.party.includes(input)) {
            // Display confirmation alert
            const confirmed = window.confirm(
              `Add ${input} to the party?`
            );
            if (confirmed) {
              this.party = [...this.party, input];
            }
          } else {
            window.alert("User is already in the party.");
          }
        } else {
          window.alert(
            "Input must contain only lowercase letters and numbers, with no spaces and maximum length of 10 characters."
          );
        }
      } else {
        window.alert("Party is full.");
      }
    } else {
      window.alert("Input cannot be empty.");
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot
            .querySelector("#confetti")
            .setAttribute("popped", "");
        }, 0);
      }
    );
  }

  static get properties() {
    return {
      party: { type: Array },
    };
  }
}

customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
