import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import ornament from '../assets/images/title-ornament.svg';

@customElement('section-title')
class SectionTitle extends LitElement {
  @property({ type: String }) text = '';

  render () {
    return html `
      <h2 class="text">${this.text}</h2>
    `;
  }

  static styles = css `
    .text {
      margin: 5rem 0 0.5rem;
      text-align: center;
      font-family: "Carattere", cursive;
      font-weight: 600;
      font-size: 40px;
      line-height: 0.7;
      color: var(--primary-color);
    }

    .text::after {
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
  `;
}

export default SectionTitle;