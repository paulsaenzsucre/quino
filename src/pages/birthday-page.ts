import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

// Import all components
import '../components/new-hero.mjs'
// import '../components/countdown-timer';
// import '../components/guest-counter';
// import '../components/rsvp-button';
// import '../components/sparkle-overlay';
// import '../components/castle-background';

export class BirthdayPage extends LitElement {
  @property()
  guestCount = 0;

  static styles = css`
    :host {
      display: block;
      position: relative;
      overflow-x: hidden;
    }

    .container {
      position: relative;
      z-index: 1;
      padding: 1rem;
      text-align: center;
    }

    .section {
      margin: 2rem 0;
    }
  `;

  constructor() {
    super();
  }

  handleRSVP() {
    // this.guestCount++;
  }

  render() {
    return html`
      <!-- Background layers -->
      <sparkle-overlay></sparkle-overlay>
      <castle-background></castle-background>

      <!-- Hero -->
      <app-hero></app-hero>

      <div class="container">
        <!-- Countdown -->
        <div class="section">
          <countdown-timer target="2026-05-30T18:00:00"></countdown-timer>
        </div>

        <!-- Guest Counter -->
        <div class="section">
          <guest-counter .count=${this.guestCount}></guest-counter>
        </div>

        <!-- RSVP -->
        <div class="section">
          <rsvp-button
            name="Sofía"
            phone="51999999999"
            @rsvp=${this.handleRSVP}
          ></rsvp-button>
        </div>

        <!-- Location -->
        <div class="section">
          <button
            @click=${() =>
        window.open(
          'https://maps.google.com/?q=-12.0464,-77.0428',
          '_blank'
        )
      }
          >
            📍 View Location
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('birthday-page', BirthdayPage);