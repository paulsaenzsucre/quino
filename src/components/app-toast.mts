import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("app-toast")
export class AppToast extends LitElement {
  @state() private message = "";
  @state() private visible = false;

  static styles = css`
    .toast {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 100px;

      background: #b8bcba;
      color: var(--primary-color);
      padding: 12px 16px;
      border-radius: 8px;

      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
      transition: all 0.25s ease;

      font-size: 16px;
      z-index: 9999;
    }

    .show {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  `;

  show(message: string, duration = 3000) {
    this.message = message;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, duration);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("notify", this.handleNotify as EventListener);
  }

  disconnectedCallback() {
    window.removeEventListener("notify", this.handleNotify as EventListener);
    super.disconnectedCallback();
  }

  private handleNotify = (e: CustomEvent) => {
    this.show(e.detail.message, e.detail.duration);
  };

  render() {
    return html`
      <div class="toast ${this.visible ? "show" : ""}">
        ${this.message}
      </div>
    `;
  }
}
