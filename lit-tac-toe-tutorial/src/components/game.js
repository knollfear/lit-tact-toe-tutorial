import { LitElement, html, css } from 'lit-element';

export class Game extends LitElement {

  static get properties() {
    return {

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
  }

  render() {
    return html`
     <div class="game">
       <div class="game-board">
         <lit-tac-toe-board ></lit-tac-toe-board>
       </div>
       <div class="game-info">
         <div>{/* status */}</div>
         <ol>{/* TODO */}</ol>
       </div>
     </div>
   `;
  }
}

