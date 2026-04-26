import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import crown from '../assets/images/crown.png';
import bouquet from '../assets/images/bouquet.png';
import misquince from '../assets/images/misquince.svg';
import video from '../assets/intro.mp4';
import corner from '../assets/images/corner.png';
import quinceanera from '../assets/images/quinceanera.png';
import '../components/party-details.mjs';
import '../components/starry-sky.mjs';

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
      
      background: linear-gradient(
        180deg,
        #ffffff 0%,
        #99c1fc 40%,
        #0d57c6 100%
      );
      color: white;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;

      background: radial-gradient(
        circle at 50% 30%,
        rgba(173, 216, 255, 0.4),
        transparent 60%
      );

      pointer-events: none;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 0;

      background-image:
        radial-gradient(circle, rgba(173,216,255,0.3) 2px, transparent 3px),
        radial-gradient(circle, rgba(135,206,250,0.2) 3px, transparent 4px);

      background-size: 80px 80px, 120px 120px;
      background-position: 0 0, 40px 60px;

      opacity: 0.5;
      pointer-events: none;
    }

    .content {
      z-index: 2;
      text-align: center;
      height: 80%;
    }

    .content2 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      height: 80%;
      width: 90%;
      z-index: 2;
    }

    .img-misquince {
      width: 300px;
      margin-bottom: 32px;
    }

    .img-misquince2 {
      display: block-inline;
      width: 150px;
    }

    .kendra {
      font-family: 'Mea Culpa', cursive;
      font-weight: 800;
      font-size: 90px;
      color: #0073e6;
      top: 3%;
      margin-bottom: 0;
    }

    .kendra2 {
      font-family: 'Mea Culpa', cursive;
      font-weight: 800;
      font-size: 50px;
      color: #0073e6;
      margin-bottom: 6px;
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

    .wa-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(30, 144, 255, 0.5);
    }

    .wa-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .wa-icon {
      width: 20px;
      height: 20px;
    }

    button:hover {
      box-shadow: 0 12px 25px rgba(30, 144, 255, 0.5);
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
      will-change: transform;
      z-index:10;
    }

    /* 🪽 Wings (FLAPPING) */
    .wing {
      width: 100%;
      height: 100%;

      fill: #a3d5ff;
      opacity: 0.9;

      transform-origin: center;
      animation: flap 0.4s infinite alternate ease-in-out;
      filter: drop-shadow(0 0 6px rgba(255, 209, 102, 0.6));
    }

    .b2 .wing { fill: #87cefa; }
    .b3 .wing { fill: #bde0ff; }
    .b4 .wing { fill: #6fbfff; }

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

    .quinceanera {
      position: absolute;
      bottom: -30px;
      right: -70px;
      height: 50%;
    }

    .count {
      position: absolute;
      bottom: 6px;
      z-index: 10;
    }

    .stars {
      width: 100%;
      height: 100%;
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
      this.dispatchEvent(
        new CustomEvent("button-click", {
          detail: { message: "hello" },
          bubbles: true,
          composed: true,
        }));
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

  firstUpdated() {
    const butterflies = this.renderRoot.querySelectorAll(".butterfly");

    butterflies.forEach((b) => this.spawnButterfly(b as HTMLElement));
  }

  private spawnButterfly(el: HTMLElement) {
    const hero = this.renderRoot.querySelector(".hero") as HTMLElement;

    if (!hero) return;

    const width = hero.clientWidth;
    const height = hero.clientHeight;

    // 🧹 cancel previous animations
    el.getAnimations().forEach(a => a.cancel());

    // 🎲 random side: 0 = left, 1 = right, 2 = top
    const side = Math.floor(Math.random() * 3);

    let startX = 0;
    let startY = 0;

    if (side === 0) {
      startX = -40;
      startY = Math.random() * height;
    } else if (side === 1) {
      startX = width + 40;
      startY = Math.random() * height;
    } else {
      startX = Math.random() * width;
      startY = -40;
    }

    // 🎯 destination (keep inside upper area)
    const endX = Math.random() * width * 0.8 + width * 0.1;
    const endY = Math.random() * height * 0.5;

    const dx = endX - startX;
    const dy = endY - startY;

    // 🌀 curved path control point
    const midX = dx * 0.5 + (Math.random() * 80 - 40);
    const midY = dy * 0.5 - (40 + Math.random() * 40);

    // ⏱️ duration (slow, elegant)
    const duration = 14000 + Math.random() * 10000; // 14–24s

    // 📏 size variation
    const size = 18 + Math.random() * 18;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;

    // 🎨 optional random color


    const palette = [
      { fill: "#ffd166", glow: "rgba(255, 209, 102, 0.6)" },
      { fill: "#ffafcc", glow: "rgba(255, 175, 204, 0.6)" },
      { fill: "#cdb4db", glow: "rgba(205, 180, 219, 0.6)" },
      { fill: "#ffffff", glow: "rgba(255, 255, 255, 0.8)" }
    ];

    const pick = palette[Math.floor(Math.random() * palette.length)];
    const svg = el.querySelector("svg") as SVGElement;

    if (svg) {
      svg.style.fill = pick.fill;
      svg.style.filter = `drop-shadow(0 0 6px ${pick.glow})`;
    }

    // 📍 set start position
    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;

    // 🔄 rotation randomness
    const r1 = Math.random() * 20 - 10;
    const r2 = Math.random() * 20 - 10;
    const rMid = (r1 + r2) / 2;

    // 🎬 animate
    const animation = el.animate(
      [
        { transform: `translate(0px, 0px) rotate(${r1}deg)` },
        { transform: `translate(${midX}px, ${midY}px) rotate(${rMid}deg)` },
        { transform: `translate(${dx}px, ${dy}px) rotate(${r2}deg)` }
      ],
      {
        duration,
        easing: "ease-in-out",
        fill: "forwards"
      }
    );

    // 🔁 respawn with slight delay (natural flow)
    animation.onfinish = () => {
      setTimeout(() => this.spawnButterfly(el), Math.random() * 2000);
    };
  }

  render() {
    return html`
      <section class="hero">
      <starry-sky class="stars"></starry-sky>
        <!-- Butterflies -->
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
      i => html`
          <div class="butterfly" id="b${i}">
            <svg viewBox="0 0 24 24" class="wing">
              <path d="M12 12 C8 2, 2 6, 6 12 C2 18, 8 22, 12 12 
                       C16 2, 22 6, 18 12 C22 18, 16 22, 12 12Z" />
            </svg>
          </div>
        `
    )}
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
      <div class="content2">
        <h1 class=${this.mode === "finished" ? "kendra2" : "kendra"}>Kendra</h1>
        <img class=${this.mode === "finished" ? "img-misquince2" : "img-misquince"} src="${misquince}" />
        ${this.mode === 'finished'
            ? html`<party-details class="details" .date=${new Date('2026-05-30T00:20:00-05:00')}> </party-details>`
            : null
          }
      <!-- Button -->
      <button class="wa-btn" @click=${this.handleClick}>
        ${this.mode === "finished"
            ? html`
              <span class="wa-content">
                <!-- WhatsApp SVG -->
                <svg viewBox="0 0 32 32" class="wa-icon">
                  <path
                    fill="currentColor"
                    d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.756 5.71 2.192 8.196L0 32l7.63-2.163A15.89 15.89 0 0 0 16 32c8.836 0 16-7.164 16-16.396S24.836.396 16 .396zm0 29.207c-2.51 0-4.965-.676-7.096-1.956l-.507-.3-4.528 1.284 1.21-4.415-.33-.52A13.49 13.49 0 0 1 2.51 16.396C2.51 8.89 8.494 2.906 16 2.906c7.506 0 13.49 5.984 13.49 13.49 0 7.506-5.984 13.207-13.49 13.207zm7.396-9.978c-.403-.202-2.39-1.178-2.76-1.31-.37-.135-.64-.202-.91.202-.27.403-1.045 1.31-1.28 1.58-.236.27-.472.302-.875.1-.403-.202-1.7-.627-3.24-2-.997-.89-1.67-1.99-1.866-2.393-.196-.403-.02-.62.148-.822.15-.18.403-.47.605-.706.202-.236.27-.403.403-.673.135-.27.067-.505-.033-.706-.1-.202-.91-2.19-1.247-3-.328-.79-.662-.683-.91-.696-.236-.01-.505-.012-.774-.012s-.706.1-1.077.505c-.37.403-1.414 1.38-1.414 3.37s1.45 3.91 1.65 4.18c.202.27 2.85 4.35 6.9 6.1.964.416 1.715.665 2.3.85.966.307 1.845.264 2.54.16.775-.116 2.39-.977 2.727-1.92.337-.943.337-1.75.236-1.92-.1-.17-.37-.27-.774-.472z"
                  />
                </svg>

                <span>Recibir Invitación</span>
              </span>
            `
            : "Reproducir video"}
      </button>
      </div>
      ${this.mode === "finished"
            ? html`
      <party-countdown
        class="count"
        target="2026-05-30T00:20:00-05:00"
        style="
          --size: 60px;
          --stroke: 4;
          --value-size: 25px;
          --label-size: 15px";
      ></party-countdown>`
            : null}
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