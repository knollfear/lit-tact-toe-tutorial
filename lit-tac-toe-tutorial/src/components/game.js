import { LitElement, html, css } from 'lit-element';

export class Game extends LitElement {

  static get properties() {
    return {
      squares: {type: Array},
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
  }

  handleClick(event){

    const squares = this.squares.slice();
    squares[event.detail] = 'X';
    this.squares = squares
  }

  render() {
    return html`
     <div class="game">
       <div class="game-board">
         <lit-tac-toe-board .squares=${this.squares}
                            @board-clicked=${this.handleClick} >

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

