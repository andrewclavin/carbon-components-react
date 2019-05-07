"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var additionalProps = {
  className: 'some-class'
};
(0, _react2.storiesOf)('FormLabel', module).addWithInfo('Default', "\n    Form label.\n\n  ", function () {
  return _react.default.createElement(_FormLabel.default, additionalProps, "Label");
}).addWithInfo('With tooltip', "\n    Form label with tooltip.\n  ", function () {
  return _react.default.createElement(_FormLabel.default, additionalProps, _react.default.createElement(_Tooltip.default, {
    triggerText: "Label"
  }, "This is the content of the tooltip."));
});