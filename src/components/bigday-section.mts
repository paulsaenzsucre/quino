import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import '../components/section-title.mjs';

@customElement('bigday-section')
class BigdaySection extends LitElement {
  @property({ type: Object }) target: Date = new Date();
  
  render() {
    return html `
    <section class="container">
      <section-title text="El Gran Día"></section-title>
      <event-date
        class="event-date"
        .target=${this.target}
      ></event-date>

      <event-calendar
        .target=${this.target}
      ></event-calendar>

      <countdown-timer
        .target=${this.target}
      ></countdown-timer>
    </section>
    `;
  }

  static styles = css `
    :host {
      display: block;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .clendar {
      width: 300px;
      height: auto;
    }

    .event-day {
      margin: 3rem;
    }
  `;
}

export default BigdaySection;
