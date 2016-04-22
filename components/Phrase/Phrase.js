import React from 'react';

class Phrase extends React.Component {
  _handleChange(e) {
    this.props._setState({ 'phrase': e.target.value });
  }

  render() {
    return (
      <div className="Phrase">
        <div className="field">
          <input type="text" name="phrase" id="phrase" placeholder="Type a word or phrase" autoFocus onChange={(e) => this._handleChange(e)} />
        </div>
      </div>
    );
  }
}

export default Phrase;
