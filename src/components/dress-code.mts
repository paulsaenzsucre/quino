import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import suit from '../assets/images/suit.svg';
import dress from '../assets/images/dress.svg';
import ornament from '../assets/images/title-ornament.svg';
import '../components/countdown-timer.mjs';
import '../components/event-date.mjs';
import '../components/event-calendar.mjs';
import '../components/google-map.mjs';
import '../components/section-title.mjs';
import '../components/flex-section.mjs';

@customElement('dress-code')
class DressCode extends LitElement {
  render() {
    return html `
      <flex-section>
        <section-title text="Código de Vestimenta"></section-title>
        <h3 class="subtitle" >Elegante</h3>
        <div class="icons" >
          <img src="${suit}" />
          <img src="${dress}" />
        </div>
        <p class="text" >
          Se reserva el color <span class="highlighted-text" >azul acero</span> apara la Quinceañera.
        </p>    
      </flex-section>
    `;
  }

  static styles = css `
    :host {
      display: block;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .section-title {
      margin: 5rem 0 0.5rem;
      text-align: center;
      font-family: "Carattere", cursive;
      font-weight: 600;
      font-size: 40px;
      line-height: 0.7;
      color: var(--primary-color);
    }

    .section-title::after {
      content: "";
      display: block;
      fill: "gold";
      width: 316px;
      height: 17px;
      margin: 10px auto 0;

      background-image: url("${unsafeCSS(ornament)}");
      background-repeat: no-repeat;
      background-position: center;
      background-position: center;
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 0.9;
      }
      50% { 
        transform: scale(1.05);
        opacity: 1;
      }
    }

    .subtitle {
      text-align: center;
      font-family: "Gelasio", serif;
      font-weight: 600;
      font-size: 25px;
      font-style: italic;
      color: #0073e6compañía es lo que más valoramos
    }

    .icons {
      display: flex;
      justify-content: center;
      gap: 3rem;
      align-items: center;
      width: 80%;
    }

    icons > * {
      min-width: 0;
    }

    .icons img {
      margin: 1rem 0;
      max-width: 100px;
      height: auto;
      display: block;
    }

    .highlighted-text {
      color: blue;
    }

    .wa-btn {
      border: none;
      border-radius: 999px;
      padding: 12px 20px;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;

      background: linear-gradient(135deg, #4da6ff, #1e90ff);
      color: white;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .text {
      width: 80%;
      text-align: center;
      font-family: "Tangerine", cursive;
      font-weight: 700;
      font-size: 32px;
      font-style: bold;
      color: var(--primary-color);
    }
  `;
}

export default DressCode;
