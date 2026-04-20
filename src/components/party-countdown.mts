import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("party-countdown")
export class PartyCountdown extends LitElement {
  @property({ type: String }) target = "2026-04-25T20:00:00";

  @state() private now = Date.now();
  private timer?: number;

  connectedCallback() {
    super.connectedCallback();
    this.timer = window.setInterval(() => {
      this.now = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Montserrat", sans-serif;
    }

    .container {
      display: inline-block;
      padding: 20px 24px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 80px);
      gap: 16px;
      justify-content: center;
      text-align: center;
    }

    svg {
      width: 80px;
      height: 80px;
    }

    .track {
      fill: none;
      stroke: rgba(255,255,255,0.15);
      stroke-width: 6;
    }

    .progress {
      fill: none;
      stroke-width: 6;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      transition: stroke-dashoffset 0.6s ease;
    }

    .value {
      font-size: 18px;
      font-weight: 800;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .label {
      font-size: 9px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
    }

    /* Colors */
    .c1 { stroke: #a78bfa; } /* purple */
    .c2 { stroke: #34d399; } /* green */
    .c3 { stroke: #22d3ee; } /* cyan */
    .c4 { stroke: #facc15; } /* yellow */
  `;

  private getParts() {
    const target = new Date(this.target).getTime();
    const diff = Math.max(0, target - this.now);

    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    return { days, hours, minutes };
  }

  private getDateParts() {
    const d = new Date(this.target);

    const day = d.getDate();
    const month = new Intl.DateTimeFormat("es-ES", {
      month: "short",
    }).format(d).toUpperCase();

    return { day, month };
  }

  private arc(value: number, max: number, color: string, label: string) {
    const r = 30;
    const c = 2 * Math.PI * r;
    const offset = c - (value / max) * c;

    return html`
      <svg viewBox="0 0 100 100">
        <circle class="track" cx="50" cy="50" r=${r}></circle>

        <circle
          class="progress ${color}"
          cx="50"
          cy="50"
          r=${r}
          stroke-dasharray=${c}
          stroke-dashoffset=${offset}
        ></circle>

        <text x="50" y="45" class="value">${value}</text>
        <text x="50" y="62" class="label">${label}</text>
      </svg>
    `;
  }

  render() {
    const { days, hours, minutes } = this.getParts();
    const { day, month } = this.getDateParts();

    return html`
      <div class="container">
        <div class="grid">
          ${this.arc(day, 31, "c1", month)}
          ${this.arc(days, 365, "c2", "DÍAS")}
          ${this.arc(hours, 24, "c3", "HORAS")}
          ${this.arc(minutes, 60, "c4", "MIN")}
        </div>
      </div>
    `;
  }
}