import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// Components
///////////////////////////

import Phrase from './components/Phrase/Phrase.js';
import Customizer from './components/Customizer/Customizer.js';
import Translator from './components/Translator/Translator.js';
import Copy from './components/Copy/Copy.js';


// App Reducer
///////////////////////////

import AppReducer from './app.reducer.js';


// App Component
///////////////////////////

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(AppReducer)}>
        <div class="app">
          <Phrase />
          <Customizer />
          <Translator />
          <Copy />
        </div>
      </Provider>
    );
  }
}


// Bind to DOM
///////////////////////////

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
