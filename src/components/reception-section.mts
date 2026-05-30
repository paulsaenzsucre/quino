import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import castle from '../assets/images/castle.svg';
import '../components/section-title.mjs';
import entrada from '../assets/images/entrada.png';

@customElement('reception-section')
class ReceptionSection extends LitElement {
  
  render() {
    return html `
      <section class="container">
        <section-title text="Recepción"></section-title>
          <img class="castle" src="${castle}" />
          <p class="local">
            <span>Local Hermosa</span>
            <br>
            Av. Bolivar con ruta "E"
            <br>
            Villa El Salvador
          </p>

          <google-map
            .lat=${-12.2248527}
            .lng=${-76.9508842}
            .zoom=${16}
          ></google-map>

          <img class="entrada" src="${entrada}" />
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

    .castle {
      display: block;
      margin: 1rem 0;
      width: 100px;
      max-width: 100px;
      height: auto;
    }

    .entrada {
      width: 90%;
    }

    .local {
      font-family="PT Serif", serif;
      font-size: 20px;
      text-align: center;
      color: var(--primary-color);
      margin: 2rem 0;
    }

    .local span {
      font-weight: bold;
    }
  `;
}

export default ReceptionSection;