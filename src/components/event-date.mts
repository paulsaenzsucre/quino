import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("event-date")
export class EventDate extends LitElement {
  @property() target: Date = new Date();

  private get month() {
    return new Intl.DateTimeFormat("es-ES", {
      month: "long"
    }).format(this.target).toUpperCase();
  }

  private get day() {
    return String(this.target.getDate());
  }

  private get year() {
    return String(this.target.getFullYear());
  }

  private get weekday() {
    return new Intl.DateTimeFormat("es-ES", {
      weekday: "long"
    }).format(this.target).toUpperCase();
  }

  private get time() {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Lima",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }).format(this.target);
  }

  render() {
    return html`
    <div class="wrapper">
      <span class="month">${this.month}</span>
      <span class="day">${this.day}</span>      
      <span class="dayofweek">${this.weekday}</span>
      <span class="time">${this.time}</span>
      <span class="year">${this.year}</span>
    </div>
  `;
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
      font-family: "PT Serif", serif;
      color: var(--primary-color);
    }

    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr auto 1fr;
      justify-items: center;
      align-items: center;
      position: relative;
      text-align: center;
    }

    .month {
      grid-column: 2;
      font-size: 20px;
    }

    .dayofweek {
      grid-column: 1;
      grid-row: 2;
      padding: 0 0.7rem;
      border-top: 2px solid var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
      font-size: 1rem;
    }

    .day {
      grid-column: 2;
      grid-row: 2;
      font-size: 5rem;
      line-height: 0.8;
    }

    .time {
      grid-column: 3;
      grid-row: 2;
      padding: 0 0.7rem;
      border-top: 2px solid var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
      font-size: 1rem;
    }

    .year {
      grid-column: 2;
      grid-row: 3;
      font-size: 24px;
    }
  `;
}
