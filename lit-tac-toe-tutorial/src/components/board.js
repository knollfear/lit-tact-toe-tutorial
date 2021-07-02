import { LitElement, html, css } from 'lit-element';

export class Board extends LitElement {

  static get properties() {
    return {
      squares: {type: Array},
    };
  }

  static get styles() {
    return css`
     .board-row:after {
       clear: both;
       content: "";
       display: table;
     }
   `;
  }

  constructor() {
    super();
  }

  handleClick(position){

    this.dispatchEvent(new CustomEvent("board-clicked", { detail: position }));
  }

  renderSquare(i) {
    return html`<lit-tac-toe-square .value=${this.squares[i]} @square-clicked=${() => this.handleClick(i)} ></lit-tac-toe-square>`;
  }
  render() {
    const status = 'Next player: X';
    return html`
     <div>
       <div class="status">${status}</div>
       <div class="board-row">
         ${this.renderSquare(0)}
         ${this.renderSquare(1)}
         ${this.renderSquare(2)}
       </div>
       <div class="board-row">
         ${this.renderSquare(3)}
         ${this.renderSquare(4)}
         ${this.renderSquare(5)}
       </div>
       <div class="board-row">
         ${this.renderSquare(6)}
         ${this.renderSquare(7)}
         ${this.renderSquare(8)}
       </div>
     </div>

   `;
  }
}
