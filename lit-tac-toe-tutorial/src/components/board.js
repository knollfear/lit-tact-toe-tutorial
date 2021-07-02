import { LitElement, html, css } from 'lit-element';

export class Board extends LitElement {

  static get properties() {
    return {
      squares: {type: Array},
      xIsNext: {type: Boolean},
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

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(position){

    if (this.calculateWinner(this.squares) || this.squares[position]) {
      return;
    }
    this.dispatchEvent(new CustomEvent("board-clicked", { detail: position }));
  }

  renderSquare(i) {
    return html`<lit-tac-toe-square .value=${this.squares[i]} @square-clicked=${() => this.handleClick(i)} ></lit-tac-toe-square>`;
  }
  render() {
    const winner = this.calculateWinner(this.squares)
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.xIsNext ? 'X' : 'O');
    }
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
