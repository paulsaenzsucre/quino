import { LitElement, css, svg } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("starry-sky")
export class StarrySky extends LitElement {
  @state() stars = this.generateStars();

  generateStars() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const stars = [];

    for (let i = 0; i < 80; i++) {
      const depth = Math.random(); // 0 = far, 1 = near

      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,

        // ⭐ size based on depth
        size:
          depth > 0.8 ? 2 :
            depth > 0.5 ? 1 :
              1.4,

        // ✨ brightness
        opacity:
          depth > 0.8 ? 1 :
            depth > 0.5 ? 0.7 :
              0.4,

        // 🎬 animation
        duration: 1.5 + Math.random() * 3,
        delay: Math.random() * 5,

        // ⭐ type (dot or sparkle)
        sparkle: Math.random() > 0.85
      });
    }

    return stars;
  }

  static styles = css`
    :host {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;  /* important */
      z-index: 1;
      pointer-events: none;
    }

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .star {
      transform-origin: center;
      animation: twinkle infinite ease-in-out;
    }

    .dot {
      fill: white;
      filter:
        drop-shadow(0 0 2px white)
        drop-shadow(0 0 4px white);
    }

    .sparkle line {
      stroke: gold;
      stroke-width: 0.4;
      stroke-linecap: round;
      filter:
        drop-shadow(0 0 3px gold)
        drop-shadow(0 0 6px gold);
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.7);
      }
      50% {
        opacity: 1;
        transform: scale(1.4);
      }
    }
  `;

  render() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    return svg`
      <svg viewBox="0 0 ${w} ${h}">
        ${this.stars.map(s =>
      s.sparkle
        ? svg`
                <g
                  class="star sparkle"
                  transform="translate(${s.x}, ${s.y})"
                  style="
                    opacity:${s.opacity};
                    animation-duration:${s.duration}s;
                    animation-delay:${s.delay}s;
                  "
                >
                  <line x1="-1.5" y1="0" x2="1.5" y2="0" />
                  <line x1="0" y1="-1.5" x2="0" y2="1.5" />
                </g>
              `
        : svg`
                <circle
                  class="star dot"
                  cx=${s.x}
                  cy=${s.y}
                  r=${s.size}
                  style="
                    opacity:${s.opacity};
                    animation-duration:${s.duration}s;
                    animation-delay:${s.delay}s;
                  "
                />
              `
    )}
      </svg>
    `;
  }
}
