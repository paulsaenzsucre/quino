import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import '../components/flex-section.mjs';

@customElement('godfather-section')
class GodfatherSection extends LitElement {
  render() {
    return html`
      <flex-section>
        <p class="cite text">En compañía de mis padres:</p>
        <p class="text">
          Paul Sáenz Sucre<br>
          Ana Vallejos Palomino<br>
        </p>
        <p class="cite text">Y mis padrinos:</p>
        <p class="text">
          Sergio Sáenz Sucre<br>
          Claudia Gonzales Palomo<br>
        </p>
      </flex-section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Tangerine", cursive;
      font-size: 2rem;
      font-weight: 700;
      font-size: 32px;
      line-height: 0.8
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .text {
      text-align: center;
    }

    .cite {
      margin: 2rem 0 1rem;
    }
  `;
}

export default GodfatherSection;