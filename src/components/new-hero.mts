import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import crown from '../assets/images/crown.png';
import bouquet from '../assets/images/bouquet.png';
import misquince from '../assets/images/misquince.svg';
import video from '../assets/intro.mp4';
import corner from '../assets/images/corner.png';
import quinceanera from '../assets/images/quinceanera.png';

@customElement("app-hero")
export class AppHero extends LitElement {
  @state() private mode: "idle" | "playing" | "finished" = "idle";

  static styles = css`
    :host {
      display: block;
    }

    .hero {
      position: relative;
      height: 100dvh;
      background: white;
      color: white;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      z-index: 2;
      text-align: center;
      height: 80%;
    }

    button {
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      z-index: 3;
    }

    video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 4;
      background: black;7%
    }

    /* Decorative images */
    .img-left-bottom {
      position: absolute;
      bottom: -60px;
      left: -50px;
      width: 150px;
      z-index: 4;
      transform: scale(1.5,1.5);
    }

    .corner-left-right {
      position: absolute;
      bottom: -30px;
      left: 90px;
      width: 150px;
    }

    .corner-left-top {
      position: absolute;
      bottom: 90px;
      left: -30px;
      width: 150px;
      transform: scale(1, -1) rotate(90deg);
    }

    .img-right-top {
      position: absolute;
      top: -60px;
      right: -50px;
      width: 150px;
      z-index: 4;
      transform: scale(-1.5,-1.5);
    }

    .corner-right-left {
      position: absolute;
      top: -30px;
      right: 90px;
      width: 150px;
      transform: scale(-1,-1);
    }

    .corner-right-bottom {
      position: absolute;
      top: 90px;
      right: -30px;
      width: 150px;
      transform: scale(-1,1) rotate(90deg);
    }

    .img-top-center {
      position: absolute;
      top: 3%;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
    }

    .img-misquince {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
    }

    .quinceanera {
      position: absolute;
      bottom: -30px;
      right: -70px;
      height: 50%;
    }

    .kendra {
      font-family: 'Mea Culpa', cursive;
      font-weight: 800;
      font-size: 90px;
      color: #0073e6;
      top: 5%;
    }
  `;

  private handleClick() {
    if (this.mode === "finished") {
      this.sendInvitation();
      return;
    }

    this.mode = "playing";
  }

  private handleVideoEnd() {
    this.mode = "finished";
  }

  private sendInvitation() {
    console.log("Send invitation clicked");
    // call your API here
  }

  render() {
    return html`
      <section class="hero">
        ${this.mode !== "playing"
        ? html`
              <!-- Decorative images -->
              <img class="img-left-bottom" src="${bouquet}" />
              <img class="corner-left-right" src="${corner}" />
              <img class="corner-left-top" src="${corner}" />
              <img class="img-right-top" src="${bouquet}" />
              <img class="corner-right-left" src="${corner}" />
              <img class="corner-right-bottom" src="${corner}" />
              <img class="img-top-center" src="${crown}" />
              <img class="quinceanera" src="${quinceanera}" />

              <!-- Content -->
              <div class="content">
                <h1 class="kendra">Kendra</h1>
                <img class="img-misquince" src="${misquince}" />
              </div>

              <!-- Button -->
              <button @click=${this.handleClick}>
                ${this.mode === "finished"
            ? "Send invitation"
            : "Play video"}
              </button>
            `
        : html`
              <!-- Video -->
              <video
                src="${video}"
                autoplay
                @ended=${this.handleVideoEnd}
              ></video>
            `}
      </section>
    `;
  }
}