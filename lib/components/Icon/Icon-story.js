"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Icon2 = _interopRequireDefault(require("../Icon/Icon.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  style: {
    margin: '50px'
  },
  fill: 'grey',
  description: 'This is a description of the icon and what it does in context',
  className: 'extra-class'
};
var propsSkeleton = {
  style: {
    margin: '50px'
  }
};
var propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px'
  }
};
(0, _react2.storiesOf)('Icon', module).addWithInfo('Default', "\n    Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Icon.default, _extends({
    name: "icon--add"
  }, props)), _react.default.createElement(_Icon.default, _extends({
    name: "add--glyph"
  }, props)), _react.default.createElement(_Icon.default, _extends({
    name: "add--outline"
  }, props)));
}).addWithInfo('Skeleton', "\n    Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Icon2.default, propsSkeleton), _react.default.createElement(_Icon2.default, propsSkeleton2));
});