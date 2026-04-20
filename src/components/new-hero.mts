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
      height: 100vh;
      height: var(--app-height);
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

    .butterfly {
      position: absolute;
      width: 28px;
      height: 28px;

      fill: #a3d5ff;
      opacity: 0.8;

      pointer-events: none;
    }

    /* Different positions */
    .b1 {
      left: 10%;
      bottom: 10%;
      animation: float1 12s infinite ease-in-out;
    }

    .b2 {
      right: 15%;
      bottom: 20%;
      animation: float2 14s infinite ease-in-out;
    }

    .b3 {
      left: 50%;
      bottom: 5%;
      animation: float3 16s infinite ease-in-out;
    }

    @keyframes float1 {
      0%   { transform: translate(0, 0) scale(1); }
      50%  { transform: translate(40px, -120px) scale(1.1); }
      100% { transform: translate(0, -240px) scale(1); }
    }

    @keyframes float2 {
      0%   { transform: translate(0, 0); }
      50%  { transform: translate(-60px, -150px); }
      100% { transform: translate(0, -300px); }
    }

    @keyframes float3 {
      0%   { transform: translate(-50%, 0); }
      50%  { transform: translate(-30%, -130px); }
      100% { transform: translate(-50%, -260px); }
    }

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
      z-index: 3;
    }

    .corner-left-top {
      position: absolute;
      bottom: 90px;
      left: -30px;
      width: 150px;
      z-index: 3;
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
      z-index: 3;
      transform: scale(-1,-1);
    }

    .corner-right-bottom {
      position: absolute;
      top: 90px;
      right: -30px;
      width: 150px;
      z-index: 3;
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
      width: 300px;
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

  private setAppHeight = () => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--app-height", `${vh}px`)
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.setAppHeight();
    window.addEventListener("resize", this.setAppHeight)
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this.setAppHeight)
  }

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
        <!-- Butterflies -->
              <svg class="butterfly b1" viewBox="0 0 24 24">
                <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
              </svg>

              <svg class="butterfly b2" viewBox="0 0 24 24">
                <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
              </svg>

              <svg class="butterfly b3" viewBox="0 0 24 24">
                <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
              </svg>

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
                playsinline
                webkit-playsinline
                preload="auto"
                @ended=${this.handleVideoEnd}
              ></video>
            `}
      </section>
    `;
  }
}