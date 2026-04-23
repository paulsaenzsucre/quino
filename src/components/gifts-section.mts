import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import envelop from '../assets/images/envelop.svg';
import gift from '../assets/images/gift.svg';
import '../components/section-title.mjs';

@customElement('gifts-section')
class GiftsSection extends LitElement {
  render() {
    return html `
      <section class="container">
        <section-title text="Mesa de Regalos"></section-title>
        <p class="text">
          Tu presencia es el mejor regalo.
        </p>
        <div class="envelops" >
          <img class="rotated" src="${envelop}" />
          <img class="straight" src="${envelop}" />
        </div>
        <p class="text" >
          <span>Lluvia de Sobres</span>
          <br>
          Si deseas hacerme un regalo, te invito a participar en mi lluvia de sobres.
        </p>
        <img class="gift" src="${gift}" />
        <p class="text" >
          ¡También podrás dejar los obsequios en la recepción del evento!
        </p>
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

    .envelops {
      position: relative;
      margin: 5rem;
    }

    .straight {
      position: absolute;
      left: 50%;
      width: 100px;
      height: auto;
      transform: translateX(-50%);
    }

    .rotated {
      position: absolute;
      left: 50%;
      width: 100px;
      height: auto;
      transform: translate(-10%, -70%)  rotate(20deg);
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

    .text span {
      font-weight: 900;
    }

    .gift {
      width: 100px;
      margin: 2rem 0;
    }
  `;
}

export default GiftsSection;
