import React from 'react';
import {connect} from 'react-redux';


// Component
///////////////////////////

class Customizer extends React.Component {
  constructor(props) {
    super();
    this.fill = props.fill;
    this.shading = props.shading;
  }

  _handleKeyDown(e) {
    var not_allowed = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 119, 120, 121, 186, 187, 188, 189, 190, 191, 192, 222];
    if (not_allowed.indexOf(e.which) >= 0) {
      e.preventDefault();
    }
  }

  _handleChange(e) {
    this[e.target.name] = e.target.value;
    this.props._changeLanguage(this.shading, this.fill);
  }

  render() {
    return (
      <div className="Customizer" hidden={this.props.phrase === ''}>
        <div className="field">
          <input type="text" name="fill" size="1" onKeyDown={(e) => this._handleKeyDown(e)} onChange={(e) => this._handleChange(e)} placeholder={this.props.fill} />
        </div>

        <div className="field">
          <input type="text" name="shading" size="1" onKeyDown={(e) => this._handleKeyDown(e)} onChange={(e) => this._handleChange(e)} placeholder={this.props.shading} />
        </div>
      </div>
    );
  }
}


// Store
///////////////////////////

const customizerState = (state) => {
  return { phrase: state.phrase, fill: state.fill, shading: state.shading };
};

const customizerDispatch = (dispatch) => {
  return {
    _changeLanguage: (fill, shading) => {
      dispatch({ type: 'CHANGE_LANGUAGE', fill: fill, shading: shading });
    }
  }
};


// Export
///////////////////////////

export default connect(customizerState, customizerDispatch)(Customizer);
