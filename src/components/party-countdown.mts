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
      --size: 70px;        /* overall size */
      --stroke: 4;         /* arc thickness */
      --value-size: 16px;  /* number */
      --label-size: 8px;   /* label */
    }

    .container {
      display: inline-block;
      padding: 14px 18px;
      border-radius: 14px;
      background: rgba(13, 68, 138, 0.8);
      backdrop-filter: blur(2px);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      justify-content: center;
      text-align: center;
    }

    svg {
      width: var(--size);
      height: var(--size);
    }

    .track {
      fill: none;
      stroke: rgba(255,255,255,0.12);
      stroke-width: var(--stroke);
    }

    .progress {
      fill: none;
      stroke-width: var(--stroke);
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      transition: stroke-dashoffset 0.5s linear;      
    }

    .value {
      font-size: var(--value-size);
      font-weight: 800;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      fill: white;
    }

    .label {
      font-size: var(--label-size);
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
      letter-spacing: 1px;
      font-weight: bolder;
      fill: white;
    }

    .faltan {
      margin: 0;
      font-size: 12px;
      text-align: center;
      font-weight: bolder;
      color: white;
    }

    /* Colors (contrast with blue background) */
    .c1 { stroke: #34d399; } /* green */
    .c2 { stroke: #22d3ee; } /* cyan */
    .c3 { stroke: #f472b6; } /* pink */
    .c4 { stroke: #facc15; } /* yellow */
  `;

  private getParts() {
    const target = new Date(this.target).getTime();
    const diff = Math.max(0, target - this.now);

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    return { days, hours, minutes, seconds };
  }

  private arc(value: number, max: number, color: string, label: string) {
    const styles = getComputedStyle(this);

    const size = parseFloat(styles.getPropertyValue("--size")) || 70;
    const stroke = parseFloat(styles.getPropertyValue("--stroke")) || 4;

    const padding = 2; // safety margin
    const r = 50 - stroke / 2 - padding;

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

      <text x="50" y="50" text-anchor="middle">
        <tspan class="value" x="50" dy="-6" fill="${color}">${value}</tspan>
        <tspan class="label" x="50" dy="30">${label}</tspan>
      </text>
    </svg>
  `;
  }

  render() {
    const { days, hours, minutes, seconds } = this.getParts();

    return html`
      <div class="container">
        <p class="faltan">FALTAN</>
        <div class="grid">
          ${this.arc(days, 365, "c1", "DIAS")}
          ${this.arc(hours, 24, "c2", "HOR")}
          ${this.arc(minutes, 60, "c3", "MIN")}
          ${this.arc(seconds, 60, "c4", "SEG")}
        </div>
      </div>
    `;
  }
}