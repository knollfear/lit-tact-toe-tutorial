import { LitElement, html, css } from 'lit-element';

export class Square extends LitElement {

  static get properties() {
    return {
      value: {type: Number}
    };
  }

  static get styles() {
    return css`
     .square {
       background: #fff;
       border: 1px solid #999;
       float: left;
       font-size: 24px;
       font-weight: bold;
       line-height: 34px;
       height: 34px;
       margin-right: -1px;
       margin-top: -1px;
       padding: 0;
       text-align: center;
       width: 34px;
     }

     .square:focus {
       outline: none;
     }
   `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="square" @click=${() => this.value="X"}>
        ${this.value}
      </button>

   `;
  }
}
