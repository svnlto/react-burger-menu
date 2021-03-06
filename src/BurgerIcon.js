'use strict';

import React from 'react';
import Radium from 'radium';

let BurgerIcon = Radium(React.createClass({

  getLineStyle(index) {
    return {
      position: 'fixed',
      height: 6,
      width: 36,
      left: 36,
      top: 36 + 12 * index,
      zIndex: 1,
      opacity: this.state.hover ? 0.6 : 1
    };
  },

  handleHover() {
    this.setState({ hover: !this.state.hover });
  },

  getInitialState() {
    return { hover: false };
  },

  render() {
    var buttonStyle = {
      position: 'fixed',
      zIndex: 1,
      margin: 24,
      padding: 0,
      width: 60,
      height: 54,
      border: 'none',
      fontSize: 14,
      color: 'transparent',
      background: 'transparent',
      outline: 'none'
    };

    return (
      <div>
        <span className="bm-burger-icon" style={ this.getLineStyle(0) }></span>
        <span className="bm-burger-icon" style={ this.getLineStyle(1) }></span>
        <span className="bm-burger-icon" style={ this.getLineStyle(2) }></span>
        <button {...this.props }
          onMouseEnter={ this.handleHover }
          onMouseLeave={ this.handleHover }
          style={ buttonStyle }>
          Open Menu
        </button>
      </div>
    );
  }
}));

export default BurgerIcon;
