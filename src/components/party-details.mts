import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import './party-countdown.mjs';

@customElement("party-details")
export class PartyDetails extends LitElement {
  @property({ type: Date }) date = new Date();

  static styles = css`
    :host {
      display: inline-block;
    }

    svg {
      width: 80px;
      height: 80px;
      margin-bottom: 6px
    }

    .month-text {
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 20px;
      letter-spacing: 1px;
      fill: #1e6fb9;
    }

    .dot {
      fill: #0d4d8b;
    }

    .day {
      font-family: "Rubik", sans-serif;
      font-weight: 600;
      font-size: 25px;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .local {
      font-family: "Monserrat", sans-serif;
      margin: 16px;
      color: #0d4d8b
    }
  `;

  private getDay() {
    return this.date.getDate();
  }

  private getMonth() {
    const formatter = new Intl.DateTimeFormat("es-ES", {
      month: "long",
    });
    return formatter.format(this.date).toUpperCase();
  }

  render() {
    const month = this.getMonth();
    const day = this.getDay();

    return html`
      <p class="local">
        Local Hermosa <br> Av. Bolivar con ruta "E" <br> Villa El Salvador
      </p>
      <svg viewBox="20 20 80 80">
        <defs>
          <!-- TOP ARC -->
          <path
            id="topArc"
            d="M 20,60
               A 50,50 0 0,1 100,60"
          />
        </defs>

        <!-- MONTH -->
        <text class="month-text">
          <textPath href="#topArc" startOffset="50%" text-anchor="middle">
            ${month}
          </textPath>
        </text>

        <!-- CIRCLE -->
        <circle class="dot" cx="60" cy="75" r="25"></circle>

        <!-- DAY NUMBER -->
        <text x="60" y="75" class="day">
          ${day}
        </text>
      </svg>
    `;
  }
}