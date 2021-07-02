import { LitElement, html, css } from 'lit-element';

export class Game extends LitElement {

  static get properties() {
    return {
      squares: {type: Array},
      xIsNext: {type: Boolean},
    };
  }

  static get styles() {
    return css`
     .game {
       display: flex;
       flex-direction: row;
     }

     .game-info {
       margin-left: 20px;
     }

   `;
  }

  constructor() {
    super();
    this.squares = Array(9).fill(null)
    this.xIsNext = true
  }

  handleClick(event){

    const squares = this.squares.slice();
    squares[event.detail] = this.xIsNext ? 'X' : 'O';
    this.xIsNext = !this.xIsNext
    this.squares = squares
  }

  render() {
    return html`
     <div class="game">
       <div class="game-board">
         <lit-tac-toe-board .squares=${this.squares}
                            @board-clicked=${this.handleClick}
                            .xIsNext=${this.xIsNext}
         >

         </lit-tac-toe-board>
       </div>
       <div class="game-info">
         <div>{/* status */}</div>
         <ol>{/* TODO */}</ol>
       </div>
     </div>
   `;
  }
}

