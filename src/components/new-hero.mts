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
    /* 🦋 Butterfly container (FLOATING) */
    .butterfly {
      position: absolute;
      width: 28px;
      height: 28px;

      fill: #a3d5ff;
      opacity: 0.8;

      pointer-events: none;
    }

    /* 🪽 Wings (FLAPPING) */
    .wing {
      width: 100%;
      height: 100%;

      fill: #a3d5ff;
      opacity: 0.8;

      transform-origin: center;
      animation: flap 0.4s infinite alternate ease-in-out;
    }

    /* Individual butterflies */
    .b1 {
      left: 10%;
      bottom: 5%;
      animation: float1 14s infinite ease-in-out;
    }

    .b2 {
      right: 15%;
      bottom: 10%;
      animation: float2 16s infinite ease-in-out;
    }

    .b3 {
      left: 50%;
      bottom: 0%;
      animation: float3 18s infinite ease-in-out;
    }

    .b4 {
      right: 30%;
      bottom: 8%;
      animation: float4 20s infinite ease-in-out;
    }

    /* 🌬️ Floating paths */
    @keyframes float1 {
      0%   { transform: translate(0, 0) rotate(0deg); }
      50%  { transform: translate(40px, -120px) rotate(5deg); }
      100% { transform: translate(0, -240px) rotate(-5deg); }
    }

    @keyframes float2 {
      0%   { transform: translate(0, 0) rotate(0deg); }
      50%  { transform: translate(-60px, -150px) rotate(-6deg); }
      100% { transform: translate(0, -300px) rotate(6deg); }
    }

    @keyframes float3 {
      0%   { transform: translate(-50%, 0) rotate(0deg); }
      50%  { transform: translate(-30%, -130px) rotate(4deg); }
      100% { transform: translate(-50%, -260px) rotate(-4deg); }
    }

    @keyframes float4 {
      0%   { transform: translate(0, 0) rotate(0deg); }
      50%  { transform: translate(30px, -100px) rotate(8deg); }
      100% { transform: translate(-20px, -220px) rotate(-6deg); }
    }

    /* 🪽 Flapping */

    @keyframes flap {
      from { transform: scaleX(1); }
      to   { transform: scaleX(1.25); }
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
              <!-- 🦋 Butterfly 1 -->
        <div class="butterfly b1">
          <svg viewBox="0 0 24 24" class="wing">
            <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 
                     C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
          </svg>
        </div>

        <!-- 🦋 Butterfly 2 -->
        <div class="butterfly b2">
          <svg viewBox="0 0 24 24" class="wing">
            <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 
                     C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
          </svg>
        </div>

        <!-- 🦋 Butterfly 3 -->
        <div class="butterfly b3">
          <svg viewBox="0 0 24 24" class="wing">
            <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 
                     C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
          </svg>
        </div>

        <!-- 🦋 Butterfly 4 -->
        <div class="butterfly b4">
          <svg viewBox="0 0 24 24" class="wing">
            <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 
                     C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
          </svg>
        </div>

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