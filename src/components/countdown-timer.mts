import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("countdown-timer")
class CountdownTimer extends LitElement {
  @property({ type: Object }) target: Date = new Date();
  @state() private days = "00";
  @state() private hours = "00";
  @state() private minutes = "00";
  @state() private seconds = "00";

  private intervalId?: number;

  connectedCallback() {
    super.connectedCallback();
    this.updateCountdown();
    this.intervalId = window.setInterval(() => this.updateCountdown(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalId);
  }

  private updateCountdown() {
    const now = new Date();
    const diff = this.target.getTime() - now.getTime();

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.days = String(days).padStart(2, "0");
    this.hours = String(hours).padStart(2, "0");
    this.minutes = String(minutes).padStart(2, "0");
    this.seconds = String(seconds).padStart(2, "0");
  }

  render() {
    return html`
      <div class="countdown">
        <h2>FALTAN</h2>

        <div class="time">
          <div class="block">
            <span>${this.days}</span>
            <small>DÍAS</small>
          </div>

          <span class="sep">:</span>

          <div class="block">
            <span>${this.hours}</span>
            <small>HORAS</small>
          </div>

          <span class="sep">:</span>

          <div class="block">
            <span>${this.minutes}</span>
            <small>MINUTOS</small>
          </div>

          <span class="sep">:</span>

          <div class="block">
            <span>${this.seconds}</span>
            <small>SEGUNDOS</small>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    .countdown {
      text-align: center;
      font-family: "Xanh Mono", monospace;
      color: #1e3a8a;
    }

    h2 {
      font-size: 40px;
      letter-spacing: 6px;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .time {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 60px;
    }

    .block span {
      font-size: 36px;
    }

    .block small {
      font-size: 12px;
      letter-spacing: 2px;
      margin-top: 5px;
      color: #3b82f6;
    }

    .sep {
      font-size: 28px;
      color: #60a5fa;
    }
  `;
}

export default CountdownTimer;
