import React from 'react';
import Clipboard from 'clipboard';

class Copy extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false
    }
  }

  _handleClick() {
    var that = this;
    that.setState({ showAlert: true });
    setTimeout(function() {
      that.setState({ showAlert: false });
    }, 3000);
  }

  render() {
    new Clipboard('#copy');

    return (
      <div className="Copy" hidden={this.props.phrase === ''}>
        <button type="button" id="copy" data-clipboard-target="#art" onClick={(e) => this._handleClick(e)}>
          <span hidden={this.state.showAlert}>Copy to clipboard</span>
          <span hidden={!this.state.showAlert}>Copied!</span>
        </button>
      </div>
    );
  }
}

export default Copy;
