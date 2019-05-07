"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Loading = _interopRequireDefault(require("../Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var loadingProps = {
  active: true,
  className: 'some-class'
};
(0, _react2.storiesOf)('Loading', module).addWithInfo('Loading with overlay', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return _react.default.createElement(_Loading.default, loadingProps);
}).addWithInfo('Loading without overlay', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return _react.default.createElement(_Loading.default, _extends({}, loadingProps, {
    withOverlay: false
  }));
}).addWithInfo('Small loading', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return _react.default.createElement(_Loading.default, _extends({}, loadingProps, {
    small: true,
    withOverlay: false
  }));
});