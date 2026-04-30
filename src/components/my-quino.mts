import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './flex-section.mjs';
import crown from '../assets/images/crown2.png';
import shoe from '../assets/images/shoe.svg';

@customElement('my-quino')
class MyQuino extends LitElement {
  @property({ type: Object }) target: Date = new Date();
  
  render() {
    return html`
      <flex-section>
        <img class="crown" src=${crown}/>
        <h2 class="title">MIS XV</h2>
        <event-date
          class="event-date"
          .target=${this.target}
        ></event-date>
        <p class="cite">
          "Con la bendición de Dios y el amor que mis
          padres me han dado, me siento feliz de llegar
          a este momento de mi vida, el día que dejaré
          atrás mi infancia y comenzaré un nuevo viaje
          con muchas metas que cumplir."
        </p>
        <img class="shoe" src=${shoe}/>
      </flex-section>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .crown {
      margin-top: 2rem;
      width: 120px;
    }

    .title {
      font-family: "Pridi", sans-serif;
      font-weight: 500;
      font-size: 2rem;
    }

    .cite {
      margin: 2rem 0;
      max-width: 345px;
      text-align: center;
      font-family: "Tangerine";
      font-weight: bolder;
      font-size: 2rem
    }
    
    .shoe {
      width: 80px;
    }
  `;
}

export default MyQuino;