import React from 'react';

class Customizer extends React.Component {
  constructor(props) {
    super();
    this.shading = props.shading;
    this.fill = props.fill;
  }

  _handleChange(e) {
    this[e.target.name] = e.target.value;
    this.props._setState({ 'shading': this.shading, 'fill': this.fill });
  }

  render() {
    return (
      <div className="Customizer" hidden={this.props.phrase === ''}>
        <div className="field">
          <label for="fill">Change fill</label>
          <input type="text" name="fill" size="1" onChange={(e) => this._handleChange(e)} placeholder={this.props.fill} />
        </div>

        <div className="field">
          <label for="background">Shading</label>
          <input type="text" name="shading" size="1" onChange={(e) => this._handleChange(e)} placeholder={this.props.shading} />
        </div>
      </div>
    );
  }
}

export default Customizer;
