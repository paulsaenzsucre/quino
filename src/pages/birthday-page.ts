import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

// Import all components
import '../components/new-hero.mjs';
import '../components/dress-code.mjs';
import '../components/invitation-footer.mjs';
import '../components/reception-section.mjs';
import '../components/rsvp-section.mjs';
import '../components/bigday-section.mjs';
import '../components/gifts-section.mjs';

export class BirthdayPage extends LitElement {
  @property()
  guestCount = 0;

  @state() token = '';

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

  connectedCallback(): void {
    super.connectedCallback();
    const params = new URLSearchParams(window.location.search);
    this.token = params.get('token');

    console.log("Token: ", this.token);
    
  }

  async handleSubmit() {
    await fetch(`https://phoenixsolutions.dev/send-invite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.token
      }),
    });
  }

  handleRSVP() {
    // this.guestCount++;
  }

  render() {
    return html`
      <app-hero
        @button-click=${this.handleSubmit}
      ></app-hero>
      <dress-code></dress-code>
      <gifts-section></gifts-section>
      <bigday-section .target=${new Date('2026-05-30T20:00:00-05:00')} ></bigday-section>
      <rsvp-section
        @button-click=${this.handleSubmit}
      ></rsvp-section>
      <reception-section></reception-section>
      <invitation-footer></invitation-footer>
    `;
  }
}

customElements.define('birthday-page', BirthdayPage);
