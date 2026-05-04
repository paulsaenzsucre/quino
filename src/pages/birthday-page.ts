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
import '../components/app-toast.mjs';
import '../components/my-quino.mjs';
import '../components/invite-section.mjs';
import '../components/godfather-section.mjs';

type RsvpStatus = 'confirmed' | 'canceled' | 'pending';
interface Seat {
  name: string;
  status: RsvpStatus;
}
interface Guest {
  name: string;
  seats: Seat[];
}

export class BirthdayPage extends LitElement {
  @property()
  guestCount = 0;

  @state()
  token = '';

  @state()
  guest: Guest | null = null;

  targetDate = '2026-05-30T20:00:00-05:00';

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
    this.init();
  }

  async init() {
    const params = new URLSearchParams(window.location.search);
    this.token = params.get('token') ?? '';

    if (this.token) {
      this.guest = await this.getGuestInfo();
    }
    console.log('token: ', this.token, 'guest: ', this.guest);
    
  }

  async getGuestInfo(): Promise<Guest | null> {
    try {
      const res = await fetch(
        `https://user.phoenixsolutions.dev/guestinfo/${this.token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${this.token}`
        }
      });
      console.log(res)

      if (!res.ok) {
        return null;
      };
      

      const json = await res.json();
      return json.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async handleSubmit() {
    // const res = await fetch(`https://user.phoenixsolutions.dev/send-invite`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': `${this.token}`
    //   },
    //   body: JSON.stringify({
    //     id: this.token
    //   }),
    // });

    // if (!res.ok) {
    //   window.dispatchEvent(new CustomEvent("notify", {
    //     detail: {
    //       message: "¡El mensaje no fue enviado. Reintentar luego!",
    //       duration: 5000
    //     }
    //   }));

    //   return;
    // }

    // window.dispatchEvent(new CustomEvent("notify", {
    //   detail: {
    //     message: "¡Se envió su reserva a su número de Whatsapp!",
    //     duration: 5000
    //   }
    // }));

    window.dispatchEvent(new CustomEvent("notify", {
      detail: {
        message: "¡La opción de confirmación se activará el 09/05/2026!",
        duration: 5000
      }
    }));
  }

  render() {
    return html`
      <app-hero
        @button-click=${this.handleSubmit}
      ></app-hero>
      <my-quino .target=${new Date(this.targetDate)}></my-quino>
      <godfather-section></godfather-section>
      ${this.guest
        ? html`<invite-section
            .guest=${this.guest}
            @button-click=${this.handleSubmit}
          ></invite-section>`
        : null
      }
      <dress-code></dress-code>
      <gifts-section></gifts-section>
      <bigday-section .target=${new Date(this.targetDate)} ></bigday-section>
      <reception-section></reception-section>
      <invitation-footer></invitation-footer>
      <app-toast></app-toast>
    `;
  }
}

customElements.define('birthday-page', BirthdayPage);

export type {
  RsvpStatus,
  Seat,
  Guest
}
