'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var BurgerIcon = (0, _radium2['default'])(_react2['default'].createClass({

  getLineStyle: function getLineStyle(index) {
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

  handleHover: function handleHover() {
    this.setState({ hover: !this.state.hover });
  },

  getInitialState: function getInitialState() {
    return { hover: false };
  },

  render: function render() {
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

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('span', { className: 'bm-burger-icon', style: this.getLineStyle(0) }),
      _react2['default'].createElement('span', { className: 'bm-burger-icon', style: this.getLineStyle(1) }),
      _react2['default'].createElement('span', { className: 'bm-burger-icon', style: this.getLineStyle(2) }),
      _react2['default'].createElement(
        'button',
        _extends({}, this.props, {
          onMouseEnter: this.handleHover,
          onMouseLeave: this.handleHover,
          style: buttonStyle }),
        'Open Menu'
      )
    );
  }
}));

exports['default'] = BurgerIcon;
module.exports = exports['default'];