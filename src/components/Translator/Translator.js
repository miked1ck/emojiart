import React from 'react';
import {connect} from 'react-redux';


// Data
///////////////////////////

import font_pattern from '../../data/example.json';


// Component
///////////////////////////

class Translator extends React.Component {
  render() {
    var that = this;
    var font = font_pattern;

    var art = '';
    var phrase = '-' + this.props.phrase.toLowerCase();
    if (phrase.length > 1) {
      phrase = phrase.replace(/ /gi, '-');
      var art = phrase.split('').map(function(v, k) {
        return font_pattern[v].replace(/x/gi, that.props.shading).replace(/o/gi, that.props.fill);
      });
    }

    return (
      <div className="Art" hidden={this.props.phrase === ''}>
        <pre id="art">{art}</pre>
      </div>
    );
  }
}



// Store
///////////////////////////

const translatorState = (state) => {
  return { phrase: state.phrase, fill: state.fill, shading: state.shading };
};

const translatorDispatch = (dispatch) => {
  return {
    _broadcastPhrase: (phrase) => {
      console.log('undefined', phrase);
      dispatch({ type: 'BROADCAST_PHRASE', phrase: phrase });
    }
  }
};


// Export
///////////////////////////

export default connect(translatorState, translatorDispatch)(Translator);
