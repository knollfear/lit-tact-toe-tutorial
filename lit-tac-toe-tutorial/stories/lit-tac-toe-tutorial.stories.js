import { html } from 'lit-html';
import '../src/lit-tac-toe-tutorial.js';

export default {
  title: 'LitTacToeTutorial',
  component: 'lit-tac-toe-tutorial',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <lit-tac-toe-tutorial
      style="--lit-tac-toe-tutorial-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </lit-tac-toe-tutorial>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
