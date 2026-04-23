import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("event-calendar")
export class EventCalendar extends LitElement {
  @property({ type: Object }) target: Date = new Date();

  private getMonthName() {
    return new Intl.DateTimeFormat("es-ES", { month: "long" })
      .format(this.target)
      .toUpperCase();
  }

  private getDaysGrid() {
    const year = this.target.getFullYear();
    const month = this.target.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [];

    // empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(null);
    }

    // days
    for (let d = 1; d <= totalDays; d++) {
      cells.push(d);
    }

    return cells;
  }

  render() {
    const days = ["D", "L", "M", "X", "J", "V", "S"];
    const grid = this.getDaysGrid();

    return html`
      <div class="month">${this.getMonthName()}</div>
      <div class="divider"></div>

      <div class="days">
        ${days.map(d => html`<span class="day" style="grid-column">${d}</span>`)}
      </div>

      <div class="grid">
        ${grid.map(d =>
      d === null
        ? html`<span class="cell"></span>`
        : html`
                <span class="cell ${d === this.target.getDate() ? "highlight" : ""}">
                  ${d}
                </span>
              `
    )}
      </div>

     <div class="container">
     </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      max-width: 320px;
      margin: auto;
      text-align: center;
      font-family: "Rubik", sans-serif;
      color: #1e3a8a;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }

    .month {
      font-family: "Rubik", sans-serif;
      font-size: 26px;
      letter-spacing: 6px;
      margin-bottom: 10px;
    }

    .divider {
      height: 2px;
      background: #93c5fd;
      margin: 10px 40px;
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      font-family: "Rubik", sans-serif;
      font-size: 14px;
      color: #3b82f6;
      margin-bottom: 10px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      font-size: 16px;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
    }

    .highlight {
      background: #3b82f6;
      color: white;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin: auto;
    }
  `;
}