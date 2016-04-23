// import deps
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Phrase from '../components/Phrase/Phrase.js';
import Customizer from '../components/Customizer/Customizer.js';
import Art from '../components/Art/Art.js';
import Copy from '../components/Copy/Copy.js';

// main app that binds everything together
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'shading': '🖖',
      'fill': '👽',
      'phrase': '',
      'art': ''
    };
  }

  _setState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div class="app">
        <Phrase
          _setState={(e) => this._setState(e)} />
        <Customizer
          _setState={(e) => this._setState(e)}
          phrase={this.state.phrase}
          fill={this.state.fill}
          shading={this.state.shading} />
        <Art
          _setState={(e) => this._setState(e)}
          phrase={this.state.phrase}
          fill={this.state.fill}
          shading={this.state.shading} />
          <Copy
            phrase={this.state.phrase}
            art={this.state.art} />
      </div>
    );
  }
}

// Bind main app to DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
