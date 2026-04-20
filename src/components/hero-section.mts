import { LitElement, html, css } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import videoUrl from '../assets/intro.mp4';
import fallbackImage from '../assets/castle.jpg';
import fontUrl from '../assets/princess.ttf';
import { unsafeCSS } from 'lit';

export class HeroSection extends LitElement {

  @property()
  name = 'Kendra';

  @property()
  targetDate = '2026-05-30T18:00:00';

  @state()
  scene: 'intro' | 'main' = 'intro';

  @state()
  isMuted = true;

  @state()
  timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  @query('video')
  videoEl!: HTMLVideoElement;

  interval: any;

  static styles = css`
    @font-face {
      font-family: 'Princess';
      src: url(${unsafeCSS(fontUrl)}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }
    
    .hero {
      position: relative;
      height: 100vh;
      overflow: hidden;
      color: white;
      font-family: 'Princess', cursive;
    }

    video, .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      transition: opacity 1s ease;
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }

    .content {
      position: absolute;
      top: 0;
      width: 100%;
      text-align: center;
      z-index: 1;
      padding: 0;
    }

    h1 {
      font-family: "Princess", cursive;
      font-size: 5rem;
      color: gold;
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }

    p {
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }

    .countdown {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      font-weight: bold;
    }

    .box {
      background: rgba(0,0,0,0.4);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      backdrop-filter: blur(5px);
    }

    .controls {
      position: absolute;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
      z-index: 2;
    }

    .btn {
      padding: 0.6rem 1.2rem;
      border-radius: 999px;
      border: none;
      background: rgba(0,0,0,0.5);
      color: white;
      cursor: pointer;
      backdrop-filter: blur(6px);
      font-weight: bold;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.updateTime();
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.videoEl.addEventListener('ended', () => {
      this.scene = 'main';
    });
  }

  updateTime() {
    const diff = new Date(this.targetDate).getTime() - Date.now();
    if (diff <= 0) return;

    this.timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  toggleSound() {
    this.isMuted = !this.isMuted;
    this.videoEl.muted = this.isMuted;
    this.videoEl.play();
  }

  replay() {
    this.scene = 'intro';
    this.videoEl.currentTime = 0;
    this.videoEl.play();
  }

  render() {
    return html`
      <section class="hero">

        <!-- VIDEO -->
        <video
          class=${this.scene === 'intro' ? '' : 'hidden'}
          src="${videoUrl}"
          autoplay<party-details> </party-details>
          muted
          playsinline
        ></video>

        <!-- IMAGE -->
        <img
          class="bg ${this.scene === 'main' ? '' : 'hidden'}"
          src="${fallbackImage}"
        />

        <!-- TEXT OVERLAY -->
        <div class="content">
          <h1>✨ ${this.name} ✨</h1>
          <p>Mis quince años 👑</p>

          ${this.scene === 'main'
        ? html`
                <div class="countdown">
                  <div class="box">${this.timeLeft.days}d</div>
                  <div class="box">${this.timeLeft.hours}h</div>
                  <div class="box">${this.timeLeft.minutes}m</div>
                  <div class="box">${this.timeLeft.seconds}s</div>
                </div>
              `
        : ''}
        </div>

        <!-- CONTROLS (BOTTOM) -->
        <div class="controls">
          ${this.scene === 'intro'
        ? html`
                <button @click=${this.toggleSound} class="btn">
                  ${this.isMuted ? '🔇 Sound' : '🔊 Sound On'}
                </button>
              `
        : html`
                <button @click=${this.replay} class="btn">
                  🎬 Replay
                </button>
              `}
        </div>

      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
