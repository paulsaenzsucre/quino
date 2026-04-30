import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import '../components/section-title.mjs';

@customElement('bigday-section')
class BigdaySection extends LitElement {
  @property({ type: Object }) target: Date = new Date();
  
  render() {
    return html `
    <flex-section>
      <section-title text="El Gran Día"></section-title>
      <event-calendar
        .target=${this.target}
      ></event-calendar>

      <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MmUzbmV2ZHRndG05aHJkcTc2dWtyZms4aDIgYTIyODJiMTFmZmFhZWVjODRhYTEyMDI1Yjc2YjgwZmY3MjMzYTNkN2VjZGM4ZmYxOGNjMzg5ZDU3MjRjNDNmM0Bn&amp;tmsrc=a2282b11ffaaeec84aa12025b76b80ff7233a3d7ecdc8ff18cc389d5724c43f3%40group.calendar.google.com"><img border="0" src="https://calendar.google.com/calendar/images/ext/gc_button1_es-419.gif" alt="Google Calendar"></a>

      <countdown-timer
        .target=${this.target}
      ></countdown-timer>
    </flex-section>
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
