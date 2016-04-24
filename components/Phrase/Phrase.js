import React from 'react';

class Phrase extends React.Component {
  _handleKeyDown(e) {
    var allowed = [8, 32, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    if (allowed.indexOf(e.which) < 0) {
      e.preventDefault();
    }
  }

  _handleChange(e) {
    this.props._setState({ 'phrase': e.target.value });

    setTimeout(function() {
      window.scrollTo(0,document.body.scrollHeight);
    }, 50);
  }

  _handlePaste(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="Phrase">
        <div className="field">
          <input type="text" name="phrase" id="phrase" autoComplete={false} value={this.props.phrase} placeholder="Type a word or phrase" autoFocus onPaste={(e) => this._handlePaste(e)} onKeyDown={(e) => this._handleKeyDown(e)} onChange={(e) => this._handleChange(e)} />
        </div>
      </div>
    );
  }
}

export default Phrase;
