import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import bgFooter from "../assets/images/bg-footer.jpg"; // change to your image

@customElement("invitation-footer")
export class InvitationFooter extends LitElement {

  static styles = css`
    :host {
      display: block;
    }

    .footer {
      position: relative;
      width: 100%;
      min-height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
    }

    .bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.5);
      z-index: 0;
    }

    .content {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      padding: 2rem;
    }    

    .section-title {
      margin: 5rem 0 0.5rem;
      text-align: center;
      font-family: "PT serif", cursive;
      font-weight: 600;
      font-size: 40px;
      line-height: 0.7;
      color: var(--contrast-color);
    }

    .section-text {
      text-align: center;
      font-family: "PT serif", cursive;
      font-weight: 500;
      font-size: 24px;
      font-style: bold;
      color: var(--contrast-color);
    }

    @media (max-width: 600px) {
      h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    return html`
      <footer class="footer">
        <div 
          class="bg" 
          style="background-image: url(${bgFooter});"
        ></div>

        <div class="content">
          <h2 class="section-title">¡No faltes!</h2>
          <p class="section-text">¡Será un momento inolvidable!</p>
        </div>
      </footer>
    `;
  }
}
