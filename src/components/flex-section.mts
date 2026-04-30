import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import rose from '../assets/images/rose.png';
import double from '../assets/images/double-rose.png';
import butterfly from '../assets/images/butt.png';

@customElement('flex-section')
class FlexSection extends LitElement {
  render() {
    return html`
      <section
        class="wrapper"
        style="
          --o1: url(${rose});
          --o2: url(${double});
          --o3: url(${butterfly});
        "
        >
        <slot></slot>
      </section>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--primary-color);
      width: 100%;
    }

    .wrapper::after {
      content: "";
      position: absolute;
      inset: 0;

      background-image:
        var(--o1),
        var(--o1),
        var(--o2),
        var(--o2),
        var(--o3),
        var(--o3);

      background-repeat: no-repeat, no-repeat, no-repeat;
      background-position:
        top 3rem left -1rem,
        bottom 3rem right -1rem,
        bottom 2rem left -1rem,
        top 2rem right -1rem,
        center left,
        center right;
      background-size: 50px, 50px, 50px, 50px, 35px, 35px;
      opacity: 0.3;

      pointer-events: none;
    }
  `;
}

export default FlexSection;
