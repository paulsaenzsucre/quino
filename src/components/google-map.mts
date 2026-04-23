import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("google-map")
export class GoogleMap extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .map {
      border-radius: var(--map-radius, 16px);
      overflow: hidden;
      box-shadow: var(--map-shadow, 0 10px 25px rgba(0,0,0,0.1));
    }

    iframe {
      width: 100%;
      height: var(--map-height, 300px);
      border: 0;
    }
      
    .btn {
      display: inline-block;
      width: auto;
      margin: 3rem 0;
      border: none;
      border-radius: 999px;
      padding: 12px 20px;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      text-align: center;

      background: linear-gradient(135deg, #4da6ff, #1e90ff);
      color: white;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }    

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(30, 144, 255, 0.5);
    }
  `;

  // Accept either coords OR address
  @property({ type: Number }) lat?: number;
  @property({ type: Number }) lng?: number;
  @property({ type: String }) address?: string;
  @property({ type: Number }) zoom = 15;

  private get src() {
    if (this.lat !== undefined && this.lng !== undefined) {
      return `https://www.google.com/maps?q=${this.lat},${this.lng}&z=${this.zoom}&output=embed`;
    }

    if (this.address) {
      return `https://www.google.com/maps?q=${encodeURIComponent(
        this.address
      )}&z=${this.zoom}&output=embed`;
    }

    return "";
  }

  private get directionsUrl() {
    if (this.lat !== undefined && this.lng !== undefined) {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}`;
    }

    if (this.address) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.address)}`;
    }

    return "#";
  }

  render() {
    return html`
    <div class="container">
      <div class="map">
        <iframe
          src=${this.src}
          loading="lazy"
          allowfullscreen>
        </iframe>
      </div>
      <a
        class="btn"
        href=${this.directionsUrl}
        target="_blank"
        rel="noopener"
      >
        Cómo llegar
      </a>
    </div>
    `;
  }
}