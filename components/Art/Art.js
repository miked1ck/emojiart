import React from 'react';

class Art extends React.Component {
  render() {
    var that = this;
    var patterns = {
      "-": "XXXXXXXX\n",
      "a": "XXOOOXXX\nXXXOOOXX\nXXOXOOXX\nXXOXXOOX\nXOOOOOOX\nXOXXXOOO\nOOOXOOOO\nXXXXXXXX\n",
      "b": "",
      "c": "",
      "d": "",
      "e": "",
      "f": "",
      "g": "",
      "h": "OOOXXOOO\nXOOXXOOX\nXOOXXOOX\nXOOOOOOX\nXOOXXOOX\nXOOXXOOX\nOOOXXOOO\nXXXXXXXX\n",
      "i": "",
      "j": "",
      "k": "OOOOXOOO\nXOOXXOOX\nXOOXOOXX\nXOOOOXXX\nXOOXOOXX\nXOOXXOOX\nOOOOXOOO\nXXXXXXXX\n",
      "l": "",
      "m": "",
      "n": "OOOXXOOO\nXOOOXXOX\nXOOOXXOX\nXOXOOXOX\nXOXOOXOX\nXOXXOOOX\nOOOXOOOX\nXXXXXXXX\n",
      "o": "XXOOOOXX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXXOOOOXX\nXXXXXXXX\n",
      "p": "",
      "q": "",
      "r": "",
      "s": "",
      "t": "OOOOOOOO\nOOXOOXOO\nOXXOOXXO\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXOOOOXX\nXXXXXXXX\n",
      "u": "OOOOXOOO\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXXOOOOXX\nXXXXXXXX\n",
      "v": "",
      "w": "",
      "x": "",
      "y": "XXXXXXXX\nOOOOXOOO\nXOOXXXOX\nXXOOXOXX\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXOOOOXX\nXXXXXXXX\n",
      "z": ""
    };

    var art = '';
    var phrase = '-' + this.props.phrase;
    if (phrase.length > 1) {
      phrase = phrase.replace(/ /gi, '-');
      var art = phrase.split('').map(function(v, k) {
        return patterns[v].replace(/x/gi, that.props.shading).replace(/o/gi, that.props.fill);
      });
    }

    return (
      <div className="Art" hidden={this.props.phrase === ''}>
        <pre id="art">{art}</pre>
      </div>
    );
  }
}

export default Art;
